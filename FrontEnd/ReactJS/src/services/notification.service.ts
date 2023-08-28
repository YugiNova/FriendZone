import axios from "axios";

class NotificationService {
    private baseUrl: string;

    constructor() {
        this.baseUrl =  process.env.REACT_APP_SERVER_URL_LARAVEL+'/api/notification'
    }

    public getNotifications = async (nextCursor?:string) => {
        try {
            let result = await axios.get(`${this.baseUrl}/`,{
                withCredentials:true,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                params:nextCursor ? {cursor:nextCursor} : ""
            })

            return result.data
        } catch (error:any) {
            throw error.response.data
        }
    }
    
    public markAsRead = async () => {
        try {
            let result = await axios.patch(`${this.baseUrl}/markAsRead`,{},{
                withCredentials:true,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                }
            })
            return result.data
        } catch (error:any) {
            throw error.response.data
        }
    }
}

export default NotificationService;
