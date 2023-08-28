import { useSelector } from "react-redux";
import {
    Action,
    ActionWrapper,
    AvatarCusom,
    ChildrenLine,
    ChildrenWrapper,
    Container,
    Content,
    ContentWrapper,
    CurrentLine,
    MainWrapper,
    Name,
    ParentLine,
    ReplyWrapper,
    ShowMore,
    Time,
    Wrapper,
} from "./styles";
import { getTheme } from "../../../redux/selectors";
import Comment from "..";
import RepliesList from "./RepliesList";
import CommentInput from "../CommentInput";
import { useState } from 'react'
import { CommentType, PostType } from "../../../interfaces/ComponentProps";
import moment from "moment";
import PostService from "../../../services/post.service";
import { toast } from "react-toastify";

interface Props {
    comment: CommentType
    post:PostType
}

const CommentItem: React.FC<Props> = ({ comment,post }) => {
    const theme = useSelector(getTheme);
    const [replyInput,setReplyInput] = useState<boolean>(false)
    const [replies,setReplies] = useState<any[]>([])
    const [nextPage,setNextPage] = useState<any>()
    const postService = new PostService()

    const showReplies = () => {
        if(post.id && comment.id){
            if(nextPage == null){
                postService.getReplies(post.id,comment.id).then(
                    res=> {
                        setNextPage(res.data.nextPage)
                        setReplies(res.data.comments)
                    }
                ).catch(err=>{
                    toast.error(err)
                })
            }else{
                postService.getReplies(post.id,comment.id,nextPage).then(
                    res=> {
                        setNextPage(res.data.nextPage)
                        setReplies(res.data.comments)
                    }
                ).catch(err=>{
                    toast.error(err)
                })
            }
          
        }
    };

    const onReply = () => {
        setReplyInput(true)
    }

    const calculateTime = (time?:string) => {
        let diffTime = moment.duration(moment().diff(moment(time))).clone();
        let diffTimeAsMinute = moment.duration(moment().diff(moment(time))).asMinutes();
    
        if(diffTimeAsMinute < 60){
            return Math.round(diffTime.asMinutes()).toString() + " mins"
        }
        else if(diffTimeAsMinute < 60*24){
            return Math.round(diffTime.asHours()).toString() + " hours"
        }
        else{
            return Math.round(diffTime.asDays()).toString() + " days"
        }
    }

    return (
        <Container theme={theme}>
            {/* <ParentLine  display={comment.replies?"block":"none"}></ParentLine> */}
            <MainWrapper>
                <AvatarCusom size={32} src={comment.author.avatar_url}/>
                <ContentWrapper theme={theme}>
                    <Wrapper theme={theme}>
                        <Name theme={theme}>{comment.author.display_name}</Name>
                        <Content theme={theme}>{comment.content}</Content>
                    </Wrapper>
                </ContentWrapper>
                <ActionWrapper theme={theme}>
                    <Action theme={theme}>Like</Action>
                    <Action onClick={onReply} theme={theme}>Reply</Action>
                    <Time theme={theme}>{calculateTime(comment.created_at)}</Time>
                </ActionWrapper>
                
                {/* <CurrentLine></CurrentLine>
                <ChildrenLine display={comment.replies?"block":"none"}></ChildrenLine> */}
            </MainWrapper>
            <ChildrenWrapper theme={theme}>
               
                {replies ? (
                    <RepliesList replies={replies} post={post} />
                ) : (
                    ""
                )}
                {comment.replies_count && comment.replies_count > 0 ? <a onClick={showReplies}>See {comment.replies_count} more replies</a> : ""}
            </ChildrenWrapper>
            <ReplyWrapper theme={theme}>
                {replyInput?<CommentInput post={post} parent_comment={comment}/>:""}
            </ReplyWrapper>
        </Container>
    );
};

export default CommentItem;
