import { useDispatch, useSelector } from "react-redux";
import {
    About,
    Container,
    Event,
    InfoItem,
    Introduce,
    LeftWrapper,
    PhotoList,
    Photos,
    PostWrapper,
    Title,
} from "./styles";
import { getProfile, getTheme } from "../../../redux/selectors";
import CreatePost from "../../../components/CreatePost";
import Post from "../../../components/Post";
import { AiFillHome } from "react-icons/ai";
import { MdSchool } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
import PhotoItem from "../../../components/PhotoItem";
import { Timeline as EventLine } from "antd";
import moment from "moment";
import {useEffect,useState} from 'react'
import { PostType } from "../../../interfaces/ComponentProps";
import PostService from "../../../services/post.service";

const Timeline: React.FC = () => {
    const theme = useSelector(getTheme);
    const profile = useSelector(getProfile)
    const [posts,setPosts] = useState<PostType[]>([])
    const [nextPage,setNextPage] = useState<any>()
    const postService = new PostService()

    useEffect(()=>{
        if(profile.data){
            postService.getPostByUserProfile(profile.data.id).then(
                res=>{
                    setPosts(res.data.posts)
                }
            ).catch(err => {
                console.log(err)
            })
        }
    },[profile])

    return (
        <Container theme={theme}>
            <LeftWrapper>
                <Introduce theme={theme}>
                    <Title theme={theme}>Introduce</Title>
                    <About theme={theme}>
                        {profile.data.profile?.introduce}
                    </About>
                    {/* <InfoItem theme={theme}>
                        <AiFillHome />
                        Ho Chi Minh City
                    </InfoItem>
                    <InfoItem theme={theme}>
                        <MdSchool />
                        Ton Duc Thang Univerity
                    </InfoItem>
                    <InfoItem theme={theme}>
                        <FaBirthdayCake />
                        {moment(profile.data.profile?.dob).format("DD-MM-YYYY")}
                    </InfoItem> */}
                </Introduce>
                <Photos theme={theme}>
                    <Title theme={theme}>Photos</Title>
                    <PhotoList>
                        <PhotoItem src="https://images.unsplash.com/photo-1688008926300-229f36ad49f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
                        <PhotoItem src="https://images.unsplash.com/photo-1688019984360-50d40dfa955a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
                        <PhotoItem src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80" />
                        <PhotoItem src="https://images.unsplash.com/photo-1509978778156-518eea30166b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80" />
                        <PhotoItem src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
                        <PhotoItem src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" />
                        <PhotoItem src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1274&q=80" />
                        <PhotoItem src="https://plus.unsplash.com/premium_photo-1666792562882-8bd04befec7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80" />
                        <PhotoItem src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" />
                    </PhotoList>
                </Photos>
                <Event theme={theme}>
                    <Title theme={theme}>Event</Title>
                    <EventLine
                        mode="alternate"
                        items={[
                            {
                                color: theme.primaryColor,
                                label:"2015-09-01",
                                children: "Create a services site ",
                            },
                            {
                                color: theme.primaryColor,
                                label:"2015-09-01",
                                children:
                                    "Solve initial network problems",
                            },
                            {
                                color: theme.primaryColor,
                                label:"2015-09-01",
                                children: "Technical testin",
                            },
                            {
                                color: theme.primaryColor,
                                label:"2015-09-01",
                                children:
                                    "Network problems being solved",
                            },
                        ]}
                    />
                </Event>
            </LeftWrapper>
            <PostWrapper theme={theme}>
                {profile.isOwner?<CreatePost />:<div style={{marginBottom: '-1rem'}}></div>}
                {
                   posts ? posts.map(item => {
                        return <Post post={item}/>
                    }) : ""
                }
                {
                    nextPage ?
                    <button onClick={()=>{

                    }}>See more</button>:""
                }
            </PostWrapper>
        </Container>
    );
};

export default Timeline;
