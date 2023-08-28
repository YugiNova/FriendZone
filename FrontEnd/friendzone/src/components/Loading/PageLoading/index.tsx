import { HashLoader } from "react-spinners";
import logo from "../../../assets/Full Logo.png";
import { Container, Logo } from "./styles";

const PageLoading = () => {
    return (
        <Container>
            <HashLoader color="#ce4410" loading />
            <Logo>
                <img src={logo} />
            </Logo>
        </Container>
    );
};

export default PageLoading;
