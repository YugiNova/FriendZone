import { useDispatch, useSelector } from "react-redux";
import {
    Container,
    Content,
    ContentWrapper,
    CustomButton,
    Logo,
    Title,
} from "./styles";
import { getAuth, getTheme } from "../../../redux/selectors";
import logo from "../../../assets/Full Logo.png";
import { useState } from "react";
import { PuffLoader } from "react-spinners";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../../redux/store";
import { setResetEmail } from "../../../redux/authSlice";
import AuthService from "../../../services/auth.service";
import { error } from "console";
import { toast } from "react-toastify";

const RecoverPassword = () => {
    const theme = useSelector(getTheme);
    const [send, setSend] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const authData = useSelector(getAuth);
    const navigate = useNavigate();
    const resetEmail = authData.resetEmail;
    const dispatch = useDispatch<AppDispatch>();
    const auth = new AuthService();

    useEffect(() => {
        if (!resetEmail) {
            navigate("/forgot-password");
        }
    }, []);

    const onSendMail = () => {
        setLoading(true);
        auth.sendRecoverPasswordEmail(resetEmail)
            .then((res) => {
                setLoading(false);
                setSend(true);
            }).catch(err=>{
                console.log(err)
            })
            
    };

    const onCancel = () => {
        dispatch(setResetEmail(""));
        navigate("/");
    };

    return (
        <Container>
            <Logo>
                <img src={logo} />
            </Logo>
            <ContentWrapper theme={theme}>
                <Title>Recover your password</Title>
                <Content>
                    {!send
                        ? `We will send a recovery password email to your email address. Please click button below to send`
                        : `We just already send a recovery password email to your email address, check your email and click the button to recover your password`}
                </Content>
                <CustomButton>
                    <button className="cancel" onClick={onCancel}>
                        <p>Cancel</p>
                    </button>
                    <button onClick={onSendMail}>
                        <PuffLoader
                            color="white"
                            loading={loading}
                            size={"1.25rem"}
                        />
                        <p>
                            {!send
                                ? "Send Recovery Password Email"
                                : "Re-send Recovery Password Email"}
                        </p>
                    </button>
                </CustomButton>
            </ContentWrapper>
        </Container>
    );
};

export default RecoverPassword;
