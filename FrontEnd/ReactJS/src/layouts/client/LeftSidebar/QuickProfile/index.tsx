import { AvatarCustom,AvatarWrapper, Container, InfoItem, InfoWrapper, Name, Nickname, Slogan, Wall } from "./styles"
import { useSelector } from "react-redux"
import { getAuth, getCurrentUser, getTheme } from "../../../../redux/selectors"
import smalllogo from "../../../../assets/Small Logo.png"
import { useEffect } from "react"
import { UserOutlined } from "@ant-design/icons"
import avatar_male from '../../../../assets/avatar_male.png'


const QuickProfile:React.FC = () => {
    const theme = useSelector(getTheme)
    const currentUser = useSelector(getCurrentUser)

    return(
        <Container theme={theme}>
            <Wall  theme={theme}>
                <AvatarWrapper theme={theme}><AvatarCustom theme={theme} src={currentUser.avatar_url || avatar_male}/></AvatarWrapper>
            </Wall>
            <InfoWrapper>
                <Name  theme={theme}>{currentUser.display_name}</Name>
                <Nickname  theme={theme}>{currentUser.nickname}</Nickname>
                <Slogan  theme={theme}>{currentUser.profile?.introduce}</Slogan>
                <InfoItem  theme={theme} >{currentUser.profile?.friends_count} friends</InfoItem>
               
            </InfoWrapper>
        </Container>
    )
}

export default QuickProfile