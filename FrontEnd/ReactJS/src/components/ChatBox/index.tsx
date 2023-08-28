import { useDispatch, useSelector } from "react-redux";
import { getTheme } from "../../redux/selectors";
import {
    AvatarCustom,
    Container,
    Exit,
    Footer,
    Header,
    InputCustom,
    LeftSide,
    MessageList,
    Name,
    RightSide,
    SendButton,
} from "./styles";
import { IoSend } from "react-icons/io5";
import { GrClose } from "react-icons/gr";
import { useEffect, useRef, useState } from "react";
import ChatItem from "./ChatItem";
import { removeChat } from "../../redux/chatSlice";
import socket from "../../socket";
import { Form } from "antd";

export interface Message {
    text: string;
    user: boolean;
}

interface Props {
    user: string;
}

const ChatBox: React.FC<Props> = ({ user }) => {
    const theme = useSelector(getTheme);
    const [text, setText] = useState<string>("");
    const bottomRef = useRef<null | HTMLDivElement>(null)
    const [messengers, setMessengers] = useState<Message[]>([
        {
            text: "Hi",
            user: true,
        },
        {
            text: "Hello",
            user: true,
        },
        {
            text: "What are you doing",
            user: true,
        },
        {
            text: "Somthing...",
            user: false,
        },
        {
            text: "asdasdadadasdasd",
            user: true,
        },
        {
            text: "asdadasdasd",
            user: false,
        },
        {
            text: "asdadasdasd",
            user: false,
        },
        {
            text: "asdadasdasd",
            user: false,
        },
    ]);
    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(removeChat({ user }));
    };

    useEffect(() => {
        if(bottomRef.current)
            bottomRef.current.scrollIntoView({behavior: 'smooth'});
    }, [messengers]);

    useEffect(() => {
        socket.on("recieveChat", (text,user) => {
            setMessengers((messengers)=>[...messengers,{text,user:user}]);
        });
    }, []);

    const onSend = async () => {
        try {
            socket.emit("sendChat",text,true);
            setText("")
        } catch (error) {}
    };

    return (
        <Container theme={theme}>
            <Header theme={theme}>
                <LeftSide>
                    <AvatarCustom size={32} />
                    <Name>{user}</Name>
                </LeftSide>
                <RightSide>
                    <Exit onClick={onClose}>
                        <GrClose />
                    </Exit>
                </RightSide>
            </Header>
            <MessageList theme={theme}>
                {messengers.map((item) => {
                    return <ChatItem message={item} />;
                })}
                <div ref={bottomRef} style={{display:"none"}}></div>
            </MessageList>
            <Footer theme={theme}>
                <InputCustom
                    autoSize
                    bordered={false}
                    placeholder="Aa"
                    theme={theme}
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                />
                <SendButton onClick={onSend} theme={theme}>
                    <IoSend />
                </SendButton>
            </Footer>
        </Container>
    );
};

export default ChatBox;
