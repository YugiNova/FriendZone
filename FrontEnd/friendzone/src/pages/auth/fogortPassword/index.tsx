import { useDispatch, useSelector } from "react-redux";
import {
    Container,
    Content,
    ContentWrapper,
    CustomButton,
    CustomInput,
    FormCustom,
    FormItem,
    Logo,
    Title,
} from "./styles";
import { getAuth, getTheme } from "../../../redux/selectors";
import logo from "../../../assets/Full Logo.png";
import { useState } from "react";
import { PuffLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { Form } from "antd";
import { toast } from "react-toastify";
import AuthService from "../../../services/auth.service";
import { setResetEmail } from "../../../redux/authSlice";

const ForgotPassword = () => {
    const theme = useSelector(getTheme);
    const [send, setSend] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const auth = new AuthService();
    const dispatch = useDispatch();
    const resetEmail = useSelector(getAuth);

    const onFindMail = async () => {
        try {
            const data = await form.validateFields();
            setLoading(true);
            console.log(data.email);
            auth.findEmail(data.email)
                .then((res) => {
                    dispatch(setResetEmail(res.data.data.email));
                    navigate("/recover-password");
                    setLoading(false);
                })
                .catch((err) => {
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
                    setLoading(false);
                });
        } catch (error) {}
    };

    const onCancel = () => {
        navigate("/");
    };

    return (
        <Container>
            <Logo>
                <img src={logo} />
            </Logo>
            <ContentWrapper theme={theme}>
                <Title>Find your account</Title>
                <Content>
                    Please enter email you registry to find your account :
                    <FormCustom form={form}>
                        <FormItem
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Email is required",
                                },
                                {
                                    type: "email",
                                    message: "Must have email format",
                                },
                            ]}
                        >
                            <CustomInput placeholder="Email" />
                        </FormItem>
                    </FormCustom>
                </Content>
                <CustomButton>
                    <button className="cancel" onClick={onCancel}>
                        <p>Cancel</p>
                    </button>
                    <button onClick={onFindMail}>
                        <PuffLoader
                            color="white"
                            loading={loading}
                            size={"1.25rem"}
                        />
                        <p>Find</p>
                    </button>
                </CustomButton>
            </ContentWrapper>
        </Container>
    );
};

export default ForgotPassword;
