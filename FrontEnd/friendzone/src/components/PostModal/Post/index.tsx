import { UserOutlined } from "@ant-design/icons";
import { BiLike, BiCommentDetail, BiShareAlt } from "react-icons/bi";
import {
    AcitonWrapper,
    ActionButton,
    AvatarCustom,
    Container,
    Content,
    Count,
    CountWrapper,
    Header,
    MediaWrapper,
    Name,
    Time,
} from "./styles";
import { useSelector } from "react-redux";
import { getTheme } from "../../../redux/selectors";
import { AiTwotoneLike } from "react-icons/ai";
import { useState } from "react";
import { Dropdown, Image } from "antd";
import Comment from "../../Comment"; 
import PostModal from "..";
import { FacebookSelector } from "@charkour/react-reactions";
import { PostType } from "../../../interfaces/ComponentProps";
import moment from "moment";

interface Props {
    post: PostType;
}

const Post: React.FC<Props> = ({post}) => {
    const theme = useSelector(getTheme);
    const [like, setLike] = useState(false);
    const [open, setOpen] = useState<boolean>(false)
    const [reaction, setReaction] = useState<string>("");

    const onLike = () => {
        setLike(!like);
    };

    const showPost = () => {
        setOpen(true)
    }

    const calculateTime = (time: string) => {
        let diffTime = moment.duration(moment().diff(moment(time))).clone();
        let diffTimeAsMinute = moment
            .duration(moment().diff(moment(time)))
            .asMinutes();

        if (diffTimeAsMinute < 60) {
            return Math.round(diffTime.asMinutes()).toString() + " mins";
        } else if (diffTimeAsMinute < 60 * 24) {
            return Math.round(diffTime.asHours()).toString() + " hours";
        } else {
            return Math.round(diffTime.asDays()).toString() + " days";
        }
    };

    const onReaction = (reaction: string) => {
        switch (reaction) {
            case "like":
                return (
                    <ActionButton className="like" theme={theme}>
                        <AiTwotoneLike /> Like
                    </ActionButton>
                );
            case "haha":
                return (
                    <ActionButton className="haha" theme={theme}>
                        <AiTwotoneLike /> Haha
                    </ActionButton>
                );
            case "sad":
                return (
                    <ActionButton className="sad" theme={theme}>
                        <AiTwotoneLike /> Sad
                    </ActionButton>
                );
            case "angry":
                return (
                    <ActionButton className="angry" theme={theme}>
                        <AiTwotoneLike /> Angry
                    </ActionButton>
                );
            default:
                return (
                    <ActionButton liked={like} theme={theme}>
                        <AiTwotoneLike /> Like
                    </ActionButton>
                );
        }
    };


    return (
        <Container theme={theme}>
            <Header theme={theme}>
                <AvatarCustom theme={theme} size={45} icon={<UserOutlined />} />
                <Name theme={theme}>{post.author.display_name}</Name>
                <Time theme={theme}>{calculateTime(post.created_at)} ago</Time>
            </Header>
            <Content
                ellipsis={{ rows: 3, expandable: true, symbol: "see more" }}
                theme={theme}
            >
               {post.content}
            </Content>
            <CountWrapper theme={theme}>
                <Count theme={theme}>
                    <AiTwotoneLike />
                    {post.reactions_count}
                </Count>
                <Count theme={theme}>{post.comments_count} comments</Count>
            </CountWrapper>
            <AcitonWrapper theme={theme}>
            <Dropdown
                    trigger={["click"]}
                    placement="top"
                    dropdownRender={() => (
                        <FacebookSelector
                            onSelect={(e) => {
                                setReaction(e);
                            }}
                            reactions={["like", "haha", "sad", "angry"]}
                        />
                    )}
                >
                    {onReaction(reaction)}
                </Dropdown>
                <ActionButton theme={theme}>
                    <BiCommentDetail /> Comment
                </ActionButton>
                {/* <ActionButton theme={theme}>
                    <BiShareAlt /> Share
                </ActionButton> */}
                {/* <PostModal open={open} setOpen={setOpen}/> */}
            </AcitonWrapper>
        </Container>
    );
};

export default Post;
