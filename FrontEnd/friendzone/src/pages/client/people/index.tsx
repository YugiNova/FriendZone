import { useSelector } from "react-redux";
import UserList from "../../../components/UserList";
import { Container, Title, ViewMore } from "./styles";
import { getTheme } from "../../../redux/selectors";
import { useEffect, useState } from "react";
import UserService from "../../../services/user.service";
import { toast } from "react-toastify";
import { User } from "../../../interfaces/ComponentProps";

const People = () => {
    const theme = useSelector(getTheme);
    const user = new UserService();
    const [users, setUsers] = useState<User[]>([]);
    const [page,setPage] = useState<number>(2)

    useEffect(() => {
        user.getUsers()
            .then((res) => {
                setUsers(res.data)
                // console.log(res.data)
            })
            .catch((err) => {
                toast.error(err.message);
            });
    }, []);

    const onViewMore = () => {
        user.getUsers({page})
            .then((res) => {
                if(res.data){
                    setUsers([...users,...res.data])
                }
                // console.log(res.data)
            })
            .then((res)=>{setPage(page+1)})
            .catch((err) => {
                toast.error(err.message, {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            });
    }

    return (
        <Container>
            <Title theme={theme}>Some people you many know</Title>
            <UserList users={users}/>
            <ViewMore onClick={onViewMore} theme={theme}>View more</ViewMore>
        </Container>
    );
};

export default People;
