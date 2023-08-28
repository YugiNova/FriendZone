import { useDispatch, useSelector } from "react-redux";
import logo from "../../../assets/Full Logo.png";
import {
    Banner,
    ButtonWrapper,
    Container,
    Divider,
    Forgot,
    FormCustom,
    FormItem,
    FormWrapper,
    InputCustom,
    LoginButton,
    Logo,
    PasswordCustom,
    RegisterButton,
    Welcome,
    Wrapper,
} from "./styles";
import { getAuth, getTheme } from "../../../redux/selectors";
import { HiUser,HiLockClosed } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import RegisterModal from "./RegisterModal";
import {useEffect, useState} from 'react'
import AuthService from "../../../services/auth.service";
import { Form, Input } from "antd";
import { toast } from 'react-toastify';

const Login: React.FC = () => {
    const [form] = Form.useForm()
    const theme = useSelector(getTheme);
    const navigate = useNavigate()
    const [open,setOpen] = useState<boolean>(false)
    const auth = new AuthService()
    const dispatch = useDispatch()
    let authData = useSelector(getAuth)

    useEffect(()=>{
        if(authData.error == "not_verified"){
            navigate("verify-email")
        }
    })

    const onLogin = async () => {
        try {
            const data = await form.validateFields()
            auth.login(data.email,data.password)
                .then((res:any) => {
                    window.location.reload()
                })
                .catch((err)=>{
                    toast.error(err.data.message, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                    form.resetFields()
                })
        } catch (error) {
            
        }
       
    }

    const onForgot = () => {
        navigate("/forgot-password")
    }

    const onCreate = () => {
        setOpen(!open)
    }

    return (
        <Container theme={theme}>
            <Wrapper theme={theme}>
                <Banner theme={theme}>
                    <Logo>
                        <img src={logo} />
                    </Logo>
                    <Welcome theme={theme}>
                        Welcome to our community! We’re excited to have you here
                        and can’t wait to see what you share with us.
                    </Welcome>
                </Banner>
                <FormWrapper>
                    <FormCustom form={form} theme={theme} layout="vertical">
                        <FormItem
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your email!",
                                },
                                {
                                    type: 'email',
                                    message: "Not correct email format"
                                }
                            ]}
                        >
                            <InputCustom prefix={<HiUser/>} placeholder="Email" theme={theme} />
                        </FormItem>
                        <FormItem
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password!",
                                },
                            ]}
                        >
                            <PasswordCustom prefix={<HiLockClosed/>} placeholder="Password" theme={theme} />
                        </FormItem>
                        <ButtonWrapper>
                            <LoginButton onClick={onLogin} theme={theme}>Log in</LoginButton>
                            <Forgot onClick={onForgot}>Forgot password ?</Forgot>
                            <Divider theme={theme}></Divider>
                            <RegisterButton onClick={onCreate} theme={theme}>Create Account</RegisterButton>
                            <RegisterModal setOpen={setOpen} open={open}/>
                        </ButtonWrapper>
                    </FormCustom>
                </FormWrapper>
            </Wrapper>
        </Container>
    );
};

export default Login;
