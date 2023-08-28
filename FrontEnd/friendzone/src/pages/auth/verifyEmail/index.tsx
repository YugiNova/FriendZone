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
import { useState,useEffect } from "react";
import { PuffLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { forgetLogin } from "../../../redux/authSlice";
import { AppDispatch } from "../../../redux/store";
import AuthService from "../../../services/auth.service";
import { toast } from "react-toastify";

const VerifyEmail = () => {
    const theme = useSelector(getTheme);
    const [send, setSend] = useState<boolean>(false);
    const [sendLoading, setSendLoading] = useState<boolean>(false);
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const authData = useSelector(getAuth)
    const auth = new AuthService()

    const onSendMail = () => {
        setSendLoading(true);
        auth.sendVerificationEmail().then(res=>{
            setSend(true)
            setSendLoading(false)
        }).catch(err=>{
            console.log(err)
            toast.error(err,{
                position: 'top-center'
            })
        })
    }

    const onCancel = async () => {
        dispatch(forgetLogin())
    }

    useEffect(()=>{
        if(authData.error == "not_logged_in"){
            navigate("/")
        }
    },[authData.error])

    return (
        <Container>
            <Logo>
                <img src={logo} />
            </Logo>
            <ContentWrapper theme={theme}>
                <Title>Verify your email address</Title>
                <Content>
                    {
                        !send?
                        `Thank you for signing up for our service. Just one more step
                        to completely register your FriendZone account. Please click
                        button below to send a verify email to your email you
                        already registry`:
                        `We just send a verificaition email to your
                        email address. Please check your email and click the link we
                        provided to complete verify your email. If you don't receive
                        any email, you can click button below to re-send
                        verification email`
                    }
                    
                </Content>
                <CustomButton>
                    <button className="cancel" onClick={onCancel}>
                        <p>
                            Cancel
                        </p>
                    </button>
                    <button onClick={onSendMail}>
                        <PuffLoader
                            color="white"
                            loading={sendLoading}
                            size={"1.25rem"}
                        />
                        <p>
                            {!send
                                ? "Send Verification Email"
                                : "Re-send Verification Email"}
                        </p>
                    </button>
                </CustomButton>
            </ContentWrapper>
        </Container>
    );
};

export default VerifyEmail;
