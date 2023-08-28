import axios from "axios";

interface GetUsersParams {
    page?:number,
    userId?:string,
    status?:string
}
class UserService {
    private baseUrl: string;

    constructor() {
        this.baseUrl =  process.env.REACT_APP_SERVER_URL_LARAVEL+'/api/user'
    }

    public getUsers = async (params?:GetUsersParams) => {
        try {
            
            let result = await axios.get(`${this.baseUrl}/`,{
                withCredentials:true,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                params
            })
            return result.data
        } catch (error:any) {
            throw error.response.data
        }
    }

    public getProfile = async (slug:string) => {
        try {
            let result = await axios.get(`${this.baseUrl}/profile/${slug}`,{
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

    public updateAvatar = async (formData:FormData,id:string) =>{
        try {
            let result = await axios.post(`${this.baseUrl}/${id}/avatar`,formData,{
                withCredentials:true,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "multipart/form-data",
                },
            })
            return result.data
        } catch (error:any) {
            throw error.response.data
        }
    }

    public updateCover = async (formData:FormData,id:string) =>{
        try {
            let result = await axios.post(`${this.baseUrl}/profile/${id}/coverImage`,formData,{
                withCredentials:true,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "multipart/form-data",
                },
            })
            return result.data
        } catch (error:any) {
            throw error.response.data
        }
    }

    public updateColor = async (color:string,slug:string) => {
        try {
            let result = await axios.patch(`${this.baseUrl}/profile/${slug}/color`,{color},{
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

    public updateTheme = async (theme:string,slug:string) => {
        try {
            let result = await axios.patch(`${this.baseUrl}/profile/${slug}/theme`,{theme},{
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

    public udpateProfileAttribute = async (formData:any,id:string,attribute:string) => {
        try {
            console.log(formData)
            let result = await axios.patch(`${this.baseUrl}/profile/${id}/${attribute}`,formData,{
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

    public addContact = async (formdata:any) => {
        try {
            let {user_id,content,type,status} = formdata
            let result = await axios.post(`${this.baseUrl}/contact`,{user_id,content,type,status},{
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

    public addPlace = async (formdata:any) => {
        try {
            let {user_id,name,type,status} = formdata
            let result = await axios.post(`${this.baseUrl}/place`,{user_id,name,type,status},{
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

    public addWorkEducation = async (formdata:any) => {
        try {
            let {user_id,name,year_start,year_end,type,status} = formdata
            let result = await axios.post(`${this.baseUrl}/work_education`, {user_id,name,year_start,year_end,type,status},{
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

    public updateContact = async (formdata:any,id:string) => {
        try {
            let {content,type,status} = formdata
            let result = await axios.patch(`${this.baseUrl}/contact/${id}`,{content,type,status},{
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

    public updatePlace = async (formdata:any,id:string) => {
        try {
            let {name,year_start,year_end,type,status} = formdata
            let result = await axios.patch(`${this.baseUrl}/place/${id}`,{name,year_start,year_end,type,status},{
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

    public updateWorkEducation = async (formdata:any,id:string) => {
        try {
            let {name,year_start,year_end,type,status} = formdata
            let result = await axios.patch(`${this.baseUrl}/work_education/${id}`,{name,year_start,year_end,type,status},{
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

    public deleteByService = async (id:string,service:string) => {
        try {
            let result = await axios.delete(`${this.baseUrl}/${service}/${id}`,{
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

export default UserService;
