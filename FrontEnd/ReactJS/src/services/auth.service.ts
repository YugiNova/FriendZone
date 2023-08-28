import axios from "axios";

interface RegisterUser {
    first_name: string;
    last_name: string;
    display_name: string;
    nickname:string;
    email: string;
    password: string;
    confirm: string;
    dob: Date;
    gender: string;
}
class AuthService {
    private baseUrl: string;

    constructor() {
        this.baseUrl =  process.env.REACT_APP_SERVER_URL_LARAVEL+'/api/auth'
    }

    public login = async (email: string, password: string) => {
        let result = {};
        try {
            result = await axios.post(
                `${this.baseUrl}/login`,
                { email, password },
                {
                    withCredentials: true,
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                }
            );
            return result;
        } catch (error: any) {
            throw error.response;
        }
    };

    public checkLogin = async () => {
        try {
            let result = await axios.get(`${this.baseUrl}/checkLogin`, {
                withCredentials: true,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
            return result.data;
        } catch (error: any) {
            throw error.response;
        }
    };

    public logout = async () => {
        try {
            let result = await axios.get(`${this.baseUrl}/logout`, {
                withCredentials: true,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
            return result;
        } catch (error: any) {
            throw error.response;
        }
    };

    public findEmail = async (email: string) => {
        try {
            let result = await axios.post(
                `${this.baseUrl}/password/find-email`,
                { email },
                {
                    withCredentials: true,
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                }
            );
            return result;
        } catch (error: any) {
            throw error.response;
        }
    };

    public register = async (data: RegisterUser) => {
        try {
            let {
                first_name,
                last_name,
                display_name,
                nickname,
                email,
                password,
                dob,
                gender,
            } = data;
            let result = await axios.post(
                `${this.baseUrl}/register`,
                {
                    first_name,
                    last_name,
                    display_name,
                    nickname,
                    email,
                    password,
                    dob,
                    gender,
                },
                {
                    withCredentials: true,
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                }
            );
            return result;
        } catch (error: any) {
            throw error.response;
        }
    };

    public sendVerificationEmail = async () => {
        try {
            const result = await axios.get(`${this.baseUrl}/email/verify`,{
                withCredentials: true,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })

            return result.data
        } catch (error) {
            throw error
        }
    }

    public removeCookie = async () => {
        axios.get(`${this.baseUrl}/removeCookie`,{
            withCredentials: true,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }).then(res=>{console.log(res.data.message)}).catch(err=>{})
    }

    public sendRecoverPasswordEmail = async (email:string) =>{
        try{
            let result = await  axios.post(`${this.baseUrl}/password/reset`,{email},{
                withCredentials: true,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
            return result.data
        }
        catch (error:any){
            throw error.response.data
        }
    }

    public updatePassword = async (id:string|undefined,token:string|undefined,password:string) =>{
        try{
            let result = await  axios.post(`${this.baseUrl}/password/update`,{id,token,password},{
                withCredentials: true,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
            return result.data
        }
        catch (error:any){
            throw error.response.data
        }
    }
}

export default AuthService;
