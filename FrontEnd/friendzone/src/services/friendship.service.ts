import axios from "axios";

class FriendshipService {
    private baseUrl: string;

    constructor() {
        this.baseUrl =  process.env.REACT_APP_SERVER_URL_LARAVEL+'/api/friendship'
    }

    public getFriendRequest = async () => {
        try {
            let result = await axios.get(`${this.baseUrl}/friend-requests`,{
                withCredentials:true,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })

            return result.data
        } catch (error:any) {
            throw error.response.data
        }
    }

    public sendRequest = async (recieveId:string) => {
        try {
            let result = await axios.post(`${this.baseUrl}/send-request`,{recieveId},{
                withCredentials:true,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })

            return result.data
        } catch (error:any) {
            throw error.response.data
        }
    }

    public accceptRequest = async (sentId:string) => {
        try {
            let result = await axios.post(`${this.baseUrl}/accept-request`,{sentId},{
                withCredentials:true,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })

            return result.data
        } catch (error:any) {
            throw error.response.data
        }
    }

    public removeRequest = async (recieveId:string) => {
        try {
            let result = await axios.post(`${this.baseUrl}/remove-request`,{recieveId},{
                withCredentials:true,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })

            return result.data
        } catch (error:any) {
            throw error.response.data
        }
    }
}

export default FriendshipService;
