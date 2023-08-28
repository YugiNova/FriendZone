import { Outlet, useParams } from "react-router-dom";
import {
    AffixCustom,
    ChatWrapper,
    Container,
    HeaderContainer,
    LeftSidebarContainer,
    MainContainer,
    RightSidebarConatainer,
    Wrapper,
} from "./styles";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import { Affix } from "antd";
import { useSelector } from "react-redux";
import { getChat, getTheme } from "../../redux/selectors";
import ChatBox from "../../components/ChatBox";
import { useEffect, useState } from "react";

const ClientLayout: React.FC = () => {
    const theme = useSelector(getTheme);
    const chat = useSelector(getChat);
    const { slug } = useParams();
    const [sidebar, setSidebar] = useState<boolean>(true);

    useEffect(() => {
        if (slug) {
            // console.log(profile_id);
            setSidebar(false)
        }
        else{
            setSidebar(true);
        }
    }, [slug]);

    return (
        <Container theme={theme}>

                <HeaderContainer>
                    <Header />
                    <LeftSidebarContainer show={sidebar?"block":"none"}>
                        <LeftSidebar />
                    </LeftSidebarContainer>
                    <RightSidebarConatainer  show={sidebar?"block":"none"}>
                        <RightSidebar />
                        <ChatWrapper>
                            {chat.map((item) => {
                                return <ChatBox user={item.user} />;
                            })}
                        </ChatWrapper>
                    </RightSidebarConatainer>
                </HeaderContainer>
       
            <MainContainer>
                <Outlet />
            </MainContainer>
        </Container>
    );
};

export default ClientLayout;
