import axios from "axios";

class PostService {
    private baseUrl: string;

    constructor() {
        this.baseUrl =  process.env.REACT_APP_SERVER_URL_LARAVEL+'/api'
    }

    public createPost = async (formdata:FormData) => {
        try {
            let result = await axios.post(`${this.baseUrl}/post/`,formdata,{
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

    public getPosts = async (cursor?:string) => {
        try {
            let result = await axios.get(`${this.baseUrl}/post/`,{
                withCredentials:true,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "multipart/form-data",
                },
                params:{cursor}
            })

            return result.data
        } catch (error:any) {
            throw error.response.data
        }
    }

    public createComment = async (formData:any) => {
        try {
            const {post_id,content, parent_slug} = formData

            let result = await axios.post(`${this.baseUrl}/comment/`,formData,{
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

    public getComments = async (post_id:string,nextPage?:number) => {
        try {
            let result = await axios.get(`${this.baseUrl}/comment/post/${post_id}`,{
                withCredentials:true,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "multipart/form-data",
                },
                params: {page: nextPage}
            })

            return result.data
        } catch (error:any) {
            throw error.response.data
        }
    }

    public getReplies = async (post_id:string,comment_id:string,nextPage?:number) => {
        try {
            let result = await axios.get(`${this.baseUrl}/comment/post/${post_id}/comment/${comment_id}`,{
                withCredentials:true,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "multipart/form-data",
                },
                params: {page: nextPage}
            })

            return result.data
        } catch (error:any) {
            throw error.response.data
        }
    }

    public getPostByUserProfile = async (user_id?:string,nextPage?:number) => {
        try {
            let result = await axios.get(`${this.baseUrl}/post/${user_id}`,{
                withCredentials:true,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "multipart/form-data",
                },
                params: {page: nextPage}
            })

            return result.data
        } catch (error:any) {
            throw error.response.data
        }
    }

}

export default PostService;
