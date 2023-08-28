import Menus from "./Menus"
import QuickProfile from "./QuickProfile"
import { Container } from "./styles"


const LeftSidebar:React.FC = () => {
    return(
        <Container>
            <Menus/>
            <QuickProfile/>
        </Container>
    )
}

export default LeftSidebar