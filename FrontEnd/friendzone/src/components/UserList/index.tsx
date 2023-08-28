import { User } from "../../interfaces/ComponentProps"
import UserItem from "./UserItem"
import { Container } from "./styles"
import { useId } from 'react'

interface Props{
    users:User[]
}

const UserList:React.FC<Props> = ({users}) => {
    const id = useId()

    return(
        <Container>
            {users.map(item => {
                return <UserItem user={item} key={item.id}/>
            })}
        </Container>
    )
}

export default UserList