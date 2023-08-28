import { useDispatch, useSelector } from "react-redux";
import {
    ActionButton,
    ActionWrapper,
    AvatarCustom,
    Container,
    Name,
} from "./styles";
import { getTheme } from "../../../redux/selectors";
import avatarMale from "../../../assets/avatar_male.png";
import avatarFemale from "../../../assets/avatar_female.png";
import { User } from "../../../interfaces/ComponentProps";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import FriendshipService from "../../../services/friendship.service";
import { Flip, ToastPosition, toast } from "react-toastify";
import { AppDispatch } from "../../../redux/store";
import { updateFriendship } from "../../../redux/profileSlice";
import { UserOutlined } from "@ant-design/icons";

interface Props {
    user: User;
}

const UserItem: React.FC<Props> = ({ user }) => {
    const theme = useSelector(getTheme);
    const navigate = useNavigate();
    const [friendship,setFriendship] = useState<string | undefined>(user.friendship)
    const friendshipService = new FriendshipService()
    const dispatch = useDispatch<AppDispatch>();
  

    const sendFriendRequest = () => {
        if(user.id){
            friendshipService.sendRequest(user.id).then(
                res => {
                    toast.success(res.message);
                    setFriendship('request')
                }
            ).catch(err => {
                toast.error(err.message);
            })
        }
    };

    const acceptFriendRequest = () => {
        if(user.id){
            friendshipService.accceptRequest(user.id).then(
                res => {
                    toast.success(res.message);
                    setFriendship('friend')
                }
            ).catch(err => {
                toast.error(err.message);
            })
        }
    };

    const removeFriendRequest = () => {
        if(user.id){
            friendshipService.removeRequest(user.id).then(
                res => {
                    toast.success(res.message);
                    setFriendship(undefined)
                }
            ).catch(err => {
                toast.error(err.message);
            })
        }
    };

    const renderActionButton = (friendship: string | undefined) => {
        switch (friendship) {
            case "self":
                return (
                    <ActionButton className="action" theme={theme}>
                        You
                    </ActionButton>
                );
            case "request":
                return (
                    <ActionButton onClick={removeFriendRequest} className="action" theme={theme}>
                        Remove request
                    </ActionButton>
                );
            case "accept":
                return (
                    <ActionButton onClick={acceptFriendRequest}  className="action" theme={theme}>
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
                    <ActionButton onClick={sendFriendRequest} className="action" theme={theme}>
                        Add friend
                    </ActionButton>
                );
        }
    };

    return (
        <Container theme={theme}>
            <AvatarCustom size={80} src={user.avatar_url} icon={<UserOutlined/>} />
            <Name theme={theme}>{user.display_name}</Name>
            <Name theme={theme} className="nickname">
                {user.nickname}
            </Name>
            <ActionWrapper>
                {renderActionButton(friendship)}
                <ActionButton
                    onClick={() => {
                        if(friendship)
                        dispatch(updateFriendship(friendship));
                        navigate("/" + user.slug);
                    }}
                    className="viewprofile"
                    theme={theme}
                >
                    View Profile
                </ActionButton>
            </ActionWrapper>
        </Container>
    );
};

export default UserItem;
