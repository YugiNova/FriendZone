import { useDispatch, useSelector } from "react-redux";
import {
    Container,
    Content,
    ContentWrapper,
    CustomButton,
    CustomInput,
    CustomPasswordInput,
    FormCustom,
    FormItem,
    Logo,
    Title,
} from "./styles";
import { getAuth, getTheme } from "../../../redux/selectors";
import logo from "../../../assets/Full Logo.png";
import { useState } from "react";
import { PuffLoader } from "react-spinners";
import { useNavigate, useParams } from "react-router-dom";
import { Form } from "antd";
import { toast } from "react-toastify";
import AuthService from "../../../services/auth.service";
import { setResetEmail } from "../../../redux/authSlice";
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri";

const UpdatePassword = () => {
    const theme = useSelector(getTheme);
    const [send, setSend] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const auth = new AuthService();
    const dispatch = useDispatch();
    const {id,token} = useParams()

    const onChangePassword = async () => {
        try {
            const data = await form.validateFields();
            setLoading(true);
            auth.updatePassword(id,token,data.password)
                .then((res) => {
                    navigate("/");
                    setLoading(false);
                })
                .catch((err) => {
                    toast.error(err.message, {
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
                <Title>Change password</Title>
                <Content>
                    Please enter your new password :
                    <FormCustom form={form}>
                    <FormItem
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Password is require",
                            },
                        ]}
                    >
                        <CustomPasswordInput
                            prefix={<RiLockPasswordFill />}
                            placeholder="Password"
                        />
                    </FormItem>
                    <FormItem
                        name="confirm"
                        dependencies={["password"]}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: "Please confirm your password!",
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (
                                        !value ||
                                        getFieldValue("password") === value
                                    ) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        "The two passwords that you entered do not match!"
                                    );
                                },
                            }),
                        ]}
                    >
                        <CustomPasswordInput
                            prefix={<RiLockPasswordLine />}
                            placeholder="Confirm password"
                        />
                    </FormItem>
                    </FormCustom>
                </Content>
                <CustomButton>
                    <button onClick={onChangePassword}>
                        <PuffLoader
                            color="white"
                            loading={loading}
                            size={"1.25rem"}
                        />
                        <p>Change</p>
                    </button>
                </CustomButton>
            </ContentWrapper>
        </Container>
    );
};

export default UpdatePassword;
