import { useSelector } from "react-redux";
import { Container, IconWrapper, MenuItem } from "./styles";
import { getCurrentUser, getTheme } from "../../../../redux/selectors";
import { MdNewspaper, MdFace, MdPeopleAlt } from "react-icons/md";

const Menus: React.FC = () => {
    const theme = useSelector(getTheme);
    const currentUser = useSelector(getCurrentUser)

    return (
        <Container theme={theme}>
            <MenuItem theme={theme} to={"/"}>
                <IconWrapper theme={theme}>
                    <MdNewspaper />
                </IconWrapper>
                Newsfeed
            </MenuItem>
            <MenuItem theme={theme} to={"/"+currentUser.slug}>
                <IconWrapper theme={theme}>
                    <MdFace />
                </IconWrapper>
                Profile
            </MenuItem>
            <MenuItem theme={theme} to={"/people"}>
                <IconWrapper theme={theme}>
                    <MdPeopleAlt />
                </IconWrapper>
                People
            </MenuItem>
            <MenuItem theme={theme} to={"/friend-requests"}>
                <IconWrapper theme={theme}>
                    <MdPeopleAlt />
                </IconWrapper>
                Friend requests
            </MenuItem>
        </Container>
    );
};

export default Menus;
