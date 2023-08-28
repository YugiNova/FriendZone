import { useSelector } from "react-redux";
import {
    Activity,
    ActivityButton,
    AudienceButton,
    AvatarCustom,
    Container,
    Footer,
    Header,
    Name,
    PostButton,
    Preview,
    PreviewWrapper,
    RemoveImageButton,
    TextAreaCustom,
} from "./styles";
import { getCurrentUser, getTheme } from "../../redux/selectors";
import { PlusOutlined, UserOutlined } from "@ant-design/icons";
import {
    MdPublic,
    MdSupervisorAccount,
    MdFace,
    MdInsertPhoto,
    MdTagFaces,
    MdPostAdd,
    MdOutlineClose,
} from "react-icons/md";
import { Modal, Select, Upload, UploadFile, UploadProps } from "antd";
import AudienceModal from "../AudienceModal";
import { useState, useEffect } from "react";
import PostService from "../../services/post.service";
import { toast } from "react-toastify";

interface Status {
    name: string;
    icon: React.ReactElement;
    value: string;
}

const CreatePost: React.FC = () => {
    const theme = useSelector(getTheme);
    const [open, setOpen] = useState<boolean>(false);
    const [status, setStatus] = useState<Status>({
        name: "Public",
        icon: <MdPublic />,
        value: "public",
    });
    const [content, setContent] = useState<string>("");
    const [images, setImages] = useState<any[]>([]);
    const post = new PostService()
    const currentUser = useSelector(getCurrentUser)

    const onCreatePost = () => {
        toast.info('Post is creating...')
        let formData = new FormData();
        formData.append("content", content);
        formData.append("status", status.value);
        images.map((item) => {
            formData.append("image[]", item);
        });
        
        post.createPost(formData).then((res)=>{
            setContent("")
            setImages([])
            toast.success(res.message)
        }).catch(err => {
            toast.error(err.response.data)
        })
    };

    const handlePreview = (images?: any[]) => {
        if (images && images?.length > 0) {
            const previewList = images.map((item) => {
                return {
                    original: URL.createObjectURL(item),
                    thumbnail: URL.createObjectURL(item),
                };
            });
            return (
                <div>
                    <RemoveImageButton onClick={()=>{
                        setImages([])
                    }} theme={theme}><MdOutlineClose/>Remove</RemoveImageButton>
                    <Preview showThumbnails={false} items={previewList} />
                </div>
            );
        }
    };

    return (
        <Container theme={theme}>
            <Header>
                <AvatarCustom size={45} icon={<UserOutlined />} src={currentUser.avatar_url}/>
                <Name theme={theme}>{currentUser.display_name}</Name>
                <AudienceButton
                    theme={theme}
                    onClick={() => {
                        setOpen(true);
                    }}
                >
                    {status.icon} {status.name}
                </AudienceButton>
                <AudienceModal
                    open={open}
                    setOpen={setOpen}
                    setStatus={setStatus}
                />
            </Header>
            <TextAreaCustom
                bordered={false}
                theme={theme}
                placeholder="What's on your mind?"
                value={content}
                onChange={(e) => {
                    setContent(e.target.value);
                }}
            />
            <PreviewWrapper>{handlePreview(images)}</PreviewWrapper>
            <Footer>
                <Activity>
                    <Upload
                        showUploadList={false}
                        customRequest={(options) => {
                            setImages([...images, options.file]);
                            return true;
                        }}
                    >
                        <ActivityButton theme={theme}>
                            <MdInsertPhoto />
                            Upload some photos
                        </ActivityButton>
                    </Upload>
                    {/* <ActivityButton theme={theme}>
                        <MdTagFaces />
                        Tag your friends
                    </ActivityButton> */}
                </Activity>
                <PostButton onClick={onCreatePost} theme={theme}>
                    Create Post
                </PostButton>
            </Footer>
        </Container>
    );
};

export default CreatePost;
