import { Avatar } from "antd"
import { Message } from ".."
import { Container, Content } from "./styles"
import { useSelector } from "react-redux"
import { getTheme } from "../../../redux/selectors"

interface Props {
    message:Message
}

const ChatItem:React.FC<Props> = ({message}) => {
    const theme = useSelector(getTheme)

    return(
        <Container position={message.user} theme={theme}>
            <Content position={message.user} theme={theme}>{message.text}</Content>
        </Container>
    )
}

export default ChatItem