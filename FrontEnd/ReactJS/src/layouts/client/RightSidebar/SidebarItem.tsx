import { useDispatch, useSelector } from "react-redux"
import { Avatar, AvatarWrapper, Circle, Name, Status, UserItem } from "./styles"
import { getTheme } from "../../../redux/selectors"
import smalllogo from  "../../../assets/Small Logo.png"
import { useState } from "react"
import { addChat } from "../../../redux/chatSlice"


const SidebarItem:React.FC = () => {
    const theme = useSelector(getTheme)
    const [online, setOnline] = useState(true)
    const dispatch = useDispatch()
    const [name,setName] = useState<string>("Yugi Nova")

    const showChat = () => {
        dispatch(addChat(name))
    }

    return(
        <UserItem onClick={showChat} theme={theme}>
            <AvatarWrapper theme={theme}><Avatar src={smalllogo} theme={theme}/></AvatarWrapper>
            <Name theme={theme}>{name}</Name>
            <Status theme={theme}>{online ?<Circle></Circle>: "4m"}</Status>
        </UserItem>
    )
}

export default SidebarItem