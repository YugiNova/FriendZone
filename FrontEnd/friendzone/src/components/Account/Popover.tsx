import { useDispatch, useSelector } from "react-redux"
import { getCurrentUser, getTheme } from "../../redux/selectors"
import { OptionItem, PopContent, Title} from "./styles"
import { MdPowerSettingsNew,MdSettings,MdFace6 } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";

const PopoverContent:React.FC = () => {
    const theme = useSelector(getTheme)
    const navigate = useNavigate()
    const auth = new AuthService()
    const currentUser = useSelector(getCurrentUser)

    const onLogOut = async () => {
        try {
            await auth.logout()
            window.location.replace('http://localhost:3000/')
        } catch (error:any) {
            console.log(error.data)
        }
    }

    const viewProfile = () => {
        navigate("/" + currentUser.slug)
    }

    return(
        <PopContent theme={theme}>
            <Title theme={theme}>Account</Title>
            <OptionItem onClick={viewProfile} theme={theme}><MdFace6/>View your profiles</OptionItem>
            <OptionItem theme={theme}><MdSettings/>Setting</OptionItem>
            <OptionItem onClick={onLogOut} theme={theme}><MdPowerSettingsNew/>Sign out</OptionItem>
        </PopContent>
    )
}

export default PopoverContent