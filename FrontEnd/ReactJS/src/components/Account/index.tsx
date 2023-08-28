import { useSelector } from "react-redux";
import { Container, CustomButton } from "./styles";
import { getCurrentUser, getTheme } from "../../redux/selectors";
import { Avatar, Popover } from 'antd';
import PopoverContent from "./Popover";
import smallLogo from "../../assets/Small Logo.png"
import { UserOutlined } from "@ant-design/icons";

const Account: React.FC = () => {
    const theme = useSelector(getTheme);
    const currentUser = useSelector(getCurrentUser)

    return (
        <Container>
            <Popover color={theme.secondaryBackground} arrow={false} trigger="click" placement="bottomRight" content={<PopoverContent/>}>
                <CustomButton theme={theme}>
                    <Avatar icon={<UserOutlined/>} src={currentUser.avatar_url}/>
                </CustomButton>
            </Popover>
        </Container>
        
    );
};

export default Account;
