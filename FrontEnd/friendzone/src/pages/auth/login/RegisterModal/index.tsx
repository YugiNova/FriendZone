import { DatePicker, Form, Modal, Radio, RadioChangeEvent, Select } from "antd";
import {
    Container,
    CustomForm,
    CustomInput,
    CustomPasswordInput,
    FormItem,
    Header,
    NameWrapper,
    SubmitButton,
} from "./styles";
import { useState } from "react";
import { RiLockPasswordLine, RiLockPasswordFill } from "react-icons/ri";
import { FaUserNinja, FaUserNurse } from "react-icons/fa";
import { MdAlternateEmail, MdDriveFileRenameOutline } from "react-icons/md";
import AuthService from "../../../../services/auth.service";
import { PuffLoader } from "react-spinners";
import moment from "moment";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const RegisterModal: React.FC<Props> = ({ open, setOpen }) => {
    const [form] = Form.useForm();
    const auth = new AuthService();
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onRegister = async () => {
        try {
            const data = await form.validateFields();
            setLoading(true);
            const newDate = moment(data.dob.$d).format('YYYY-MM-DD')
            data.dob = newDate;
            auth.register(data)
                .then((res) => {
                    setLoading(false);
                })
                .then(res=>{
                    setOpen(false);
                    auth.login(data.email,data.password).then(res=>{
                        window.location.reload()
                    })
                })
                .catch((err) => {
                    if(err.data){
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
                    }
                    setLoading(false);
                });
        } catch (error) {}
    };

    const onClose = () => {
        setOpen(!open);
    };

    return (
        <Modal footer={null} open={open} onCancel={onClose}>
            <Container>
                <Header>
                    <h1>Sign up</h1>
                    <h3>It's quick and easy.</h3>
                </Header>
                <CustomForm form={form} layout="vertical">
                    <NameWrapper>
                        <FormItem
                            name="first_name"
                            rules={[
                                {
                                    required: true,
                                    message: "First name is require",
                                },
                            ]}
                        >
                            <CustomInput
                                prefix={<FaUserNinja />}
                                placeholder="First name"
                            />
                        </FormItem>
                        <FormItem
                            name="last_name"
                            rules={[
                                {
                                    required: true,
                                    message: "Last name is require",
                                },
                            ]}
                        >
                            <CustomInput
                                prefix={<FaUserNurse />}
                                placeholder="Lastname"
                            />
                        </FormItem>
                    </NameWrapper>
                    <FormItem
                        name="display_name"
                        rules={[
                            {
                                required: true,
                                message: "Display name is require",
                            },
                        ]}
                    >
                        <CustomInput
                            prefix={<MdDriveFileRenameOutline />}
                            placeholder="Display name"
                        />
                    </FormItem>
                    <FormItem
                        name="nickname"
                        rules={[
                            {
                                required: true,
                                message: "Nickname is require",
                            },
                        ]}
                    >
                        <CustomInput
                            prefix={<MdDriveFileRenameOutline />}
                            placeholder="Nickname"
                        />
                    </FormItem>
                    <FormItem
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Email address is require",
                            },
                            {
                                type: "email",
                                message: "Email must have correct format",
                            },
                        ]}
                    >
                        <CustomInput
                            prefix={<MdAlternateEmail />}
                            placeholder="Email address"
                        />
                    </FormItem>
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
                    <NameWrapper>
                        <FormItem
                            label="Date of birth"
                            name="dob"
                            rules={[
                                {
                                    required: true,
                                    message: "Birthday is required",
                                },
                            ]}
                        >
                            <DatePicker style={{ width: "100%" }} />
                        </FormItem>
                        <FormItem
                            label="Gender"
                            name="gender"
                            rules={[
                                {
                                    required: true,
                                    message: "Gender is required",
                                },
                            ]}
                            initialValue={"male"}
                        >
                            <Select
                                style={{ width: "100%" }}
                                // onChange={handleChange}
                                options={[
                                    { value: "male", label: "Male" },
                                    { value: "female", label: "Female" },
                                    { value: "other", label: "Other" },
                                ]}
                            />
                        </FormItem>
                    </NameWrapper>
                </CustomForm>
                <SubmitButton onClick={onRegister}>
                    <PuffLoader
                        color="white"
                        loading={loading}
                        size={"1.25rem"}
                    />
                    Sign up
                </SubmitButton>
            </Container>
        </Modal>
    );
};

export default RegisterModal;
