const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const redis = require("redis");
const cookie = require("cookie");

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: true,
    },
});

const handleRedisClient = async (redisClient,userId, socket) => {
    redisClient.on("error", (err) => console.log("Redis Client Error", err));
    await redisClient.connect();

    if (socket.userId) {
        await redisClient.subscribe(
            `${socket.userId}:notifications`,
            function (message, chanel) {
                io.in(socket.userId).emit("notifications", JSON.parse(message));
            }
        );
    } 
   
};

//Middleware to get user id of request
io.use((socket, next) => {
    let userId = socket.handshake.auth.userId;
    if (!userId) {
        return next(new Error("invalid user id"));
    }
    socket.userId = userId;
    next();
});

io.on("connection", async (socket) => {
    //Log connect user
    console.log(`${socket.userId} with ${socket.id} is connected`);

    //Join private room named by user id
    socket.join(socket.userId);

    //Create redis client for pub/sub
    const redisClient = redis.createClient({
        url: "redis://127.0.0.1:6379",
    });
    await handleRedisClient(redisClient,socket.userId,socket)  

    //Create redis clien for socket
    const redisClientSocket = redis.createClient({
        url: "redis://127.0.0.1:6379",
    });
    await redisClientSocket.connect()
   
    socket.on('postInViewport', async(postId)=>{
        console.log(`newsfeed:${socket.userId}`)
      await redisClientSocket.lRem(`newsfeed:${socket.userId}`,0,postId)
    })
    
    //Handle disconnect event
    socket.on("disconnect", async () => {
        redisClientSocket.quit()
        redisClient.quit()
        console.log(`${socket.userId} with ${socket.id} is disconnected`);
        socket.leave(socket.userId)
    });
});

server.listen(3001, () => {
    console.log("listening on *:3001");
});
