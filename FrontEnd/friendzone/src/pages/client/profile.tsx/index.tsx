import { useDispatch, useSelector } from "react-redux";
import {
    ActionButton,
    AvatarCustom,
    Body,
    Container,
    Count,
    Cover,
    Header,
    LeftWrapper,
    Name,
    NavBar,
    NavItem,
    NickName,
    RighWrapper,
    Wrapper,
} from "./styles";
import { getCurrentUser, getProfile, getTheme } from "../../../redux/selectors";
import { AiOutlineUserAdd, AiOutlineEye } from "react-icons/ai";
import { Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    fetchProfile,
    setOwner,
    updateAvatar,
    updateCover,
    updateFriendship,
} from "../../../redux/profileSlice";
import { AppDispatch } from "../../../redux/store";
import avatar_male from "../../../assets/avatar_male.png";
import avatar_female from "../../../assets/avatar_female.png";
import default_background from "../../../assets/default_background.jpg";
import { Skeleton, Upload, UploadProps } from "antd";
import FriendshipService from "../../../services/friendship.service";
import { toast } from "react-toastify";

const Profile: React.FC = () => {
    const theme = useSelector(getTheme);
    const dispatch = useDispatch<AppDispatch>();
    const { slug } = useParams();
    const profile = useSelector(getProfile);
    const currentUser = useSelector(getCurrentUser);
    const friendship = new FriendshipService();
    const friendshipService = new FriendshipService();

    const uploadAvatar: UploadProps = {
        name: "avatar",
        showUploadList: false,
        accept: "",
        customRequest: async (options) => {
            dispatch(updateAvatar({ file: options.file, id: currentUser.id }));
        },
    };

    const uploadCover: UploadProps = {
        name: "cover",
        showUploadList: false,
        accept: "",
        customRequest: async (options) => {
            dispatch(
                updateCover({
                    file: options.file,
                    id: profile.data.profile?.id,
                })
            );
        },
    };

    useEffect(() => {
        if (slug) {
            dispatch(fetchProfile(slug));
        }
        if (profile.data.slug == currentUser.slug) {
            dispatch(setOwner(true));
        }
    }, []);

    useEffect(() => {
        if (profile.data.slug == currentUser.slug) {
            dispatch(setOwner(true));
        } else {
            dispatch(setOwner(false));
        }
    }, [profile]);

    const coverImage = (url?: string) => {
        if (url) {
            return url;
        } else {
            return default_background;
        }
    };

    const getAvatar = (url?: string) => {
        if (url) {
            return url;
        } else {
            if (profile.data.profile?.gender == "male") {
                return avatar_male;
            } else {
                return avatar_female;
            }
        }
    };

    const sendRequest = async () => {
        try {
            if (profile.data.id) {
                let result = await friendship.sendRequest(profile.data.id);
                return result;
            }
        } catch (error) {
            console.log(error);
        }
    };

    const sendFriendRequest = () => {
        if (profile.data.id) {
            friendshipService
                .sendRequest(profile.data.id)
                .then((res) => {
                    toast.success(res.message);
                    dispatch(updateFriendship('request'))
                })
                .catch((err) => {
                    toast.error(err.message);
                });
        }
    };

    const acceptFriendRequest = () => {
        if (profile.data.id) {
            friendshipService
                .accceptRequest(profile.data.id)
                .then((res) => {
                    toast.success(res.message);
    
                    dispatch(updateFriendship('friend'))
                })
                .catch((err) => {
                    toast.error(err.message);
                });
        }
    };

    const removeFriendRequest = () => {
        if (profile.data.id) {
            friendshipService
                .removeRequest(profile.data.id)
                .then((res) => {
                    toast.success(res.message);
                    dispatch(updateFriendship(""))
                })
                .catch((err) => {
                    toast.error(err.message);
                });
        }
    };

    const renderActionButton = (friendship: string | undefined) => {
        switch (friendship) {
            case "self":
                return (
                    <>
                        <Upload {...uploadAvatar}>
                            <ActionButton theme={theme}>
                                Upload avatar
                            </ActionButton>
                        </Upload>
                        <Upload {...uploadCover}>
                            <ActionButton theme={theme}>
                                Change Cover
                            </ActionButton>
                        </Upload>
                    </>
                );
            case "request":
                return (
                    <ActionButton
                        onClick={removeFriendRequest}
                        className="action"
                        theme={theme}
                    >
                        Remove request
                    </ActionButton>
                );
            case "accept":
                return (
                    <ActionButton
                        onClick={acceptFriendRequest}
                        className="action"
                        theme={theme}
                    >
                        Accept request
                    </ActionButton>
                );
            case "friend":
                return (
                    <ActionButton className="action" theme={theme}>
                        Your friend
                    </ActionButton>
                );
            default:
                return (
                    <ActionButton
                        onClick={sendFriendRequest}
                        className="action"
                        theme={theme}
                    >
                        Add friend
                    </ActionButton>
                );
        }
    };

    return (
        <Container>
            <Header theme={theme}>
                <Cover>
                    {/* <img
                        src={coverImage(profile.data.profile?.cover_image_url)}
                    /> */}
                </Cover>
                <Wrapper theme={theme}>
                    <AvatarCustom
                        theme={theme}
                        src={getAvatar(profile.data.avatar_url)}
                        size={144}
                    />                          
                    
                    {
                        profile.status == 'loading' ? <Skeleton active avatar={false} paragraph={{rows: 1,width:['15rem']}}  title={{width: '10rem'}}/>:
                        ( <LeftWrapper theme={theme}>
                            <Name theme={theme}>{profile.data.display_name}</Name>
                            <NickName theme={theme}>
                                {profile.data.nickname
                                    ? `(${profile.data.nickname})`
                                    : ""}
                            </NickName>
                            <Count theme={theme}>
                                {profile.data.profile?.friends_count}{" "}
                                {profile.data.profile?.friends_count &&
                                profile.data.profile?.friends_count > 1
                                    ? "friends"
                                    : "friend"}{" "}
                                | {profile.data.profile?.followers_count}{" "}
                                {profile.data.profile?.followers_count &&
                                profile.data.profile?.followers_count > 1
                                    ? "followers"
                                    : "follower"}
                            </Count>
                            </LeftWrapper>
                        )
                    }
                    {
                        profile.status == 'loading' ? <Skeleton.Button active size="large"/>:
                        <RighWrapper theme={theme}>
                        {profile.isOwner ? (
                            <>
                                <Upload {...uploadAvatar}>
                                    <ActionButton theme={theme}>
                                        Upload avatar
                                    </ActionButton>
                                </Upload>
                                <Upload {...uploadCover}>
                                    <ActionButton theme={theme}>
                                        Change Cover
                                    </ActionButton>
                                </Upload>
                            </>
                        ) : (
                            renderActionButton(profile.data.friendship)
                        )}
                    </RighWrapper>
                    }
                    
                </Wrapper>
                <NavBar theme={theme}>
                    <NavItem theme={theme} to={`/${slug}/timeline`}>
                        Timeline
                    </NavItem>
                    <NavItem theme={theme} to={`/${slug}/introduce`}>
                        Introduce
                    </NavItem>
                    {/* <NavItem theme={theme} to={"/"}>
                        Friends
                    </NavItem>
                    <NavItem theme={theme} to={"/"}>
                        Photos
                    </NavItem>
                    <NavItem theme={theme} to={"/"}>
                        Videos
                    </NavItem> */}
                </NavBar>
            </Header>
            <Body>
                <Outlet />
            </Body>
        </Container>
    );
};

export default Profile;
