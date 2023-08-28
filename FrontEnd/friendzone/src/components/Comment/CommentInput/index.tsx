import { IoCameraSharp, IoPeople, IoSend } from "react-icons/io5";
import { ActionItem, ActionWrapper, AvatarCustom, Container, InputWrapper, SendButton, TextAreaCustom } from "./styles";
import { useSelector } from "react-redux";
import { getCurrentUser, getTheme } from "../../../redux/selectors";
import { CommentType, PostType } from "../../../interfaces/ComponentProps";
import PostService from "../../../services/post.service";
import {useState} from 'react'
import { Bounce, toast } from "react-toastify";

interface Props {
    post:PostType
    parent_comment?:CommentType
}

const CommentInput:React.FC<Props> = ({post, parent_comment}) => {
    const theme = useSelector(getTheme)
    const postService = new PostService()
    const [content,setContent] = useState<string>("")
    const currentUser = useSelector(getCurrentUser)

    const onComment = () => {
        if(!content){
            toast.error('Comment must have some content!',{
                position: 'top-center',
                transition: Bounce
            })
        }
        else{
            if(parent_comment){
                postService.createComment({post_id:post.id,content,parent_slug:parent_comment?.slug}).then(
                    res => {
                        toast.success(res.message);
                        setContent("")
                        
                    }
                ).catch(err => {
                    toast.error(err.message)
                })
                console.log(parent_comment?.slug)
            }
            else{
                postService.createComment({post_id:post.id,content}).then(
                    res => {
                        toast.success(res.message);
                        setContent("")
                    }
                ).catch(err => {
                    toast.error(err.message)
                })
            }
            
        }
    }

    return(
        <Container theme={theme}>
            <AvatarCustom size={32} theme={theme} src={currentUser.avatar_url}/>
            <InputWrapper theme={theme}>
                <TextAreaCustom value={content} onChange={(e)=>{setContent(e.target.value)}} placeholder="Write your comment..." bordered={false} autoSize theme={theme}/>
                <ActionWrapper theme={theme}>
                    <ActionItem theme={theme}><IoCameraSharp/></ActionItem>
                    <ActionItem theme={theme}><IoPeople/></ActionItem>
                    <ActionItem theme={theme}></ActionItem>
                </ActionWrapper>
                <SendButton theme={theme}>
                    <button onClick={onComment}>
                        <IoSend/>
                    </button>
                </SendButton>
            </InputWrapper>
        </Container>
    )
}

export default CommentInput