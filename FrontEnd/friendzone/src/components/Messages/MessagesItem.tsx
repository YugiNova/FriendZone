import { useDispatch, useSelector } from 'react-redux'
import smalllogo from '../../assets/Small Logo.png'    
import {Avatar, AvatarWrapper,  Content, Name, NotificationWrapper, Time } from './styles'
import { getTheme } from '../../redux/selectors'
import { addChat } from '../../redux/chatSlice'

interface Props {
    messages:any
}

const NotificaitionItem:React.FC<Props> = ({messages}) => {
    const theme = useSelector(getTheme)
    const dispatch = useDispatch()

    const showChat = () => {
        dispatch(addChat("Yugi Nova"))
    }

    return(
        <NotificationWrapper onClick={showChat} theme={theme}>
            <AvatarWrapper><Avatar src={smalllogo}/></AvatarWrapper>
            <Name>{messages.user}</Name>
            <Content ellipsis={true} theme={theme}>{messages.content}</Content>
            <Time theme={theme}>{messages.time}</Time>
        </NotificationWrapper>
    )
}

export default NotificaitionItem