import { useEffect, useState } from "react";
import CommentItem from "./CommentItem";
import CommentInput from "./CommentInput";
import { Container } from "./styles";
import { useSelector } from "react-redux";
import { getTheme } from "../../redux/selectors";
import { CommentType, PostType } from "../../interfaces/ComponentProps";
import PostService from "../../services/post.service";
import { toast } from "react-toastify";

interface Comment {
    user: string;
    content: string;
    replies?: Comment[];
}

interface Props {
    post: PostType;
}

const Comment: React.FC<Props> = ({ post }) => {
    const theme = useSelector(getTheme);
    const [comments, setComments] = useState<CommentType[]>([]);
    const [nextPage, setNextPage] = useState<any>("");

    const postService = new PostService();

    useEffect(() => {
        if(post.id){
            postService
            .getComments(post.id)
            .then((res) => {
                setNextPage(res.data.nextPage);
                setComments(res.data.comments);
            })
            .catch((err) => {
                toast.error(err);
            });
        }
        return () => {
            setNextPage(null);
            setComments([]);
        };
    },[]);

    return (
        <Container theme={theme}>
            <CommentInput post={post} />
            {comments.map((item) => {
                return <CommentItem comment={item} post={post} />;
            })}
            {nextPage == null ? (
                ""
            ) : (
                <a
                    onClick={() => {
                        if (post.id) {
                            postService
                                .getComments(post.id, nextPage)
                                .then((res) => {
                                    setNextPage(res.data.nextPage);
                                    setComments([
                                        ...comments,
                                        ...res.data.comments,
                                    ]);
                                    console.log(res);
                                })
                                .catch();
                        }
                    }}
                >
                    View more comments
                </a>
            )}
        </Container>
    );
};

export default Comment;
