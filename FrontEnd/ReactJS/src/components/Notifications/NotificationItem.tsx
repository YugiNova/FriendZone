import { useSelector } from 'react-redux'
import smalllogo from '../../assets/Small Logo.png'    
import { AvatarWrapper,  Content, NotificationWrapper, Time, UnreadDot } from './styles'
import { getTheme } from '../../redux/selectors'
import moment from 'moment'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'

interface Props {
    notification:any
}

const calculateTime = (time:string) => {
    let diffTime = moment.duration(moment().diff(moment(time))).clone();
    let diffTimeAsMinute = moment.duration(moment().diff(moment(time))).asMinutes();

    if(diffTimeAsMinute < 60){
        return Math.round(diffTime.asMinutes()).toString() + " mins"
    }
    else if(diffTimeAsMinute < 60*24){
        return Math.round(diffTime.asHours()).toString() + " hours"
    }
    else{
        return Math.round(diffTime.asDays()).toString() + " days"
    }
}

const NotificaitionItem:React.FC<Props> = ({notification}) => {
    const theme = useSelector(getTheme)

    return(
        <NotificationWrapper theme={theme}>
            <AvatarWrapper><Avatar size={48} icon={<UserOutlined/>} src={notification.send_user.avatar_url}/></AvatarWrapper>
            <Content ellipsis={{ rows: 2, expandable:false}} theme={theme}><span>{notification.send_user.display_name}</span> {notification.content}</Content>
            <Time theme={theme}>{calculateTime(notification.created_at)}</Time>
            <UnreadDot className={notification.is_read ? '' : 'unread'} theme={theme}></UnreadDot>
        </NotificationWrapper>
    )
}

export default NotificaitionItem