import { useSelector } from "react-redux";
import Comment from "../Comment";
import Post from "./Post";
import {
    CommentContainer,
    Container,
    CustomModal,
    Media,
    PostContainer,
    PostWrapper,
} from "./styles";
import { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { getTheme } from "../../redux/selectors";
import { PostType } from "../../interfaces/ComponentProps";

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
    post: PostType;
}

const PostModal: React.FC<Props> = ({ open, setOpen, post }) => {
    const theme = useSelector(getTheme);
    const onClose = () => {
        setOpen(!open);
    };
    const [media, setMedia] = useState<boolean>(true);
    const [images, setImages] = useState<any[]>([]);

    useEffect(() => {
        if (post.images) {
            const newImages = post.images.map((item) => {
                return {
                    original: item.image_url,
                    thumbnail: item.image_url,
                };
            });
            setImages(newImages);
        }


    }, []);

    return (
        <CustomModal
            width={post.images && post.images.length > 0 ? "auto" : "35rem"}
            footer={null}
            open={open}
            onCancel={onClose}
            theme={theme}
        >
            <Container
                layout={post.images && post.images.length > 0 ? "1fr" : "0"}
            >
                <Media>
                    <ImageGallery showThumbnails={false} items={images} />
                </Media>
                <PostWrapper>
                    <PostContainer>
                        <Post post={post} />
                    </PostContainer>
                    <CommentContainer>
                        <Comment post={post}/>
                    </CommentContainer>
                </PostWrapper>
            </Container>
        </CustomModal>
    );
};

export default PostModal;
