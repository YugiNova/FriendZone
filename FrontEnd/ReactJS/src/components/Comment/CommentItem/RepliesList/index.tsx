import CommentItem from "..";
import Comment from "../..";
import { PostType } from "../../../../interfaces/ComponentProps";
import { Container } from "../../../ThemeToggle/styles";

interface Props {
    replies: Comment[];
    post: PostType
}

const RepliesList: React.FC<Props> = ({ replies,post }) => {
    return (
        <Container>
            {
                replies.map(item => {
                    return(
                        <CommentItem comment={item} post={post}/>
                    )
                })
            }
        </Container>
    );
};

export default RepliesList;
