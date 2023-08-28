import { useSelector } from "react-redux";
import { Container, CustomButton } from "./styles";
import { MdColorLens } from "react-icons/md";
import { getTheme } from "../../redux/selectors";
import { Popover } from 'antd';
import PopoverContent from "./Popover";

const ThemeToggle: React.FC = () => {
    const theme = useSelector(getTheme);

    return (
        <Container>
            <Popover color={theme.secondaryBackground} arrow={false} trigger="click" placement="bottomRight" content={<PopoverContent/>}>
                <CustomButton theme={theme}>
                    <MdColorLens />
                </CustomButton>
            </Popover>
        </Container>
        
    );
};

export default ThemeToggle;
