import { useDispatch, useSelector } from "react-redux"
import { getTheme } from "../../redux/selectors"
import { NotificationList, PopContent, Title} from "./styles"
import { useEffect, useState } from "react";
import { toggleDarkTheme, toggleLightTheme } from "../../redux/themeSlice";
import NotificaitionItem from "./MessagesItem";

interface Message{
    user:string,
    content:string,
    time:string
}

const PopoverContent:React.FC = () => {
    const theme = useSelector(getTheme)
    const [checked,setChecked] = useState<boolean>(false)
    const dispatch = useDispatch()
    const [messages,setMessages] = useState<Message[]>([
        {
            user: "User 1",
            content: "create new post create new post create new post create new post create new post create new post create new post create new post create new post create new post ",
            time: "6 days ago"
        },
        {
            user: "User 1",
            content: "create new post create new post",
            time: "6 days ago"
        },
        {
            user: "User 1",
            content: "create new post create new post",
            time: "6 days ago"
        },
        {
            user: "User 1",
            content: "create new post create new post",
            time: "6 days ago"
        }
    ])
    return(
        <PopContent theme={theme}>
            <Title theme={theme}>Messages</Title>
            <NotificationList>
                {
                    messages.map(item => {
                        return <NotificaitionItem messages={item}/>
                    })
                }
            </NotificationList>
        </PopContent>
    )
}

export default PopoverContent