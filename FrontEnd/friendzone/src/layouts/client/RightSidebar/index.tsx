import { useSelector } from "react-redux"
import SidebarItem from "./SidebarItem"
import { Container, CustomInput, ListWrapper, Title, Wrapper } from "./styles"
import { getTheme } from "../../../redux/selectors"
import { Input } from "antd"
import { MdSearch } from "react-icons/md"
    
const RightSidebar:React.FC = () => {
    const theme = useSelector(getTheme)

    return(
        <Container theme={theme}>
            <Wrapper theme={theme}>
                <CustomInput prefix={<MdSearch/>}/>
                <ListWrapper theme={theme}>
                    <Title theme={theme}>Contact</Title>
                    <SidebarItem/>
                    <SidebarItem/>
                    <SidebarItem/>
                    <SidebarItem/>
                    <SidebarItem/>
                    <SidebarItem/>
                    <SidebarItem/>
                    <SidebarItem/>
                    <SidebarItem/>
                    <SidebarItem/>
                    <SidebarItem/>
                    <SidebarItem/>
                    <Title theme={theme}>Groups</Title>
                    <SidebarItem/>
                    <SidebarItem/>
                    <SidebarItem/>
                    <SidebarItem/>
                    <SidebarItem/>
                    <SidebarItem/>
                    <SidebarItem/>
                    <SidebarItem/>
                    <SidebarItem/>
                    <SidebarItem/>
                    <SidebarItem/>
                    <SidebarItem/>
                </ListWrapper>
            </Wrapper>
        </Container>
    )
}

export default RightSidebar