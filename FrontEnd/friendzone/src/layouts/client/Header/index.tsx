import { Container, LogoContainer, OptionsContainer, SearchContainer } from "./styles"
import fulllogo from '../../../assets/Full Logo.png'
import { useSelector } from "react-redux"
import { getProfile, getTheme } from "../../../redux/selectors"
import ThemeToggle from "../../../components/ThemeToggle"
import Notification from "../../../components/Notifications"
import Messages from "../../../components/Messages"
import Account from "../../../components/Account"
import SearchBox from "./SearchBox"
import {ReactComponent as Logo} from "../../../assets/FriendZone.svg"
import { useEffect } from "react"
import { Flip, toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const Header:React.FC = () => {
    const theme = useSelector(getTheme)
    const profile = useSelector(getProfile)
    const navigate = useNavigate()

    useEffect(()=>{
        if(profile.status == "success" && profile.message){
            toast.success(profile.message, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition:Flip,
                });
        }
        else if(profile.status == "loading" && profile.message){
            toast.info(profile.message, {
                position: "bottom-left",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition:Flip,
                });
        }
    },[profile])

    return(
        <Container theme={theme}>
            <LogoContainer theme={theme}>
                <img onClick={()=>{navigate('/')}} src={fulllogo} alt="" />
            </LogoContainer>
            <SearchContainer theme={theme}>
                <SearchBox/>
            </SearchContainer>
            <OptionsContainer theme={theme}>
                <Notification/> 
                <Messages/>
                <ThemeToggle/> 
                <Account/>
            </OptionsContainer>
        </Container>
    )
}

export default Header