import { useSelector } from "react-redux"
import UserList from "../../../components/UserList"
import { Container, Title } from "./styles"
import { getTheme } from "../../../redux/selectors"
import { useEffect,useState } from "react"
import { User } from "../../../interfaces/ComponentProps"
import FriendshipService from "../../../services/friendship.service"
import { toast } from "react-toastify"

const FriendRequest = () => {
    const theme = useSelector(getTheme)
    const [users,setUsers] = useState<User[]>([])
    const friendship = new FriendshipService()
    
    useEffect(()=>{
        friendship.getFriendRequest().then(
            res => {
                setUsers(res.data)
            }
        ).catch((err) => {
            toast.error(err.message);
        });
    },[])

    return(
        <Container theme={theme}>
            <Title theme={theme}>Invitaions</Title>
            <UserList users={users}/>
        </Container>
    )
}

export default FriendRequest