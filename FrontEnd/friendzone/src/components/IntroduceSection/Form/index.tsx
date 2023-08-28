import { useDispatch, useSelector } from "react-redux";
import {
    ActionWrapper,
    ButtonWrapper,
    Container,
    CustomButton,
    CustomDatePicker,
    CustomForm,
    CustomInput,
    CustomRangePicker,
    CustomTextArea,
    FormItem,
    Title,
} from "./styles";
import { getCurrentUser, getTheme } from "../../../redux/selectors";
import { useState, useEffect } from "react";
import AudienceModal from "../../AudienceModal";

import { DatePicker, Form as FormAntd } from "antd";
import moment from "moment";
import { AppDispatch } from "../../../redux/store";
import { addContact, addPlace, addWorkEducation, udpatePlace, updateContact, updateProfileAttribute, updateWorkEducation } from "../../../redux/profileSlice";
import { IntroduceItem } from "../../../interfaces/ComponentProps";

const { RangePicker } = DatePicker;

interface FormItemType {
    name: string;
    type: string;
    title: string;
    inputType: "text" | "textarea" | "range" | "date";
}

interface Status {
    name: string;
    icon: React.ReactElement;
    value: string;
}

interface Props {
    openForm: boolean;
    setOpenForm: (openForm: boolean) => void;
    setSelectedContent: (selectedContent: IntroduceItem | undefined) => void;
    formRender: FormItemType[];
    selectedContent?: IntroduceItem;
}

const Form: React.FC<Props> = ({
    openForm,
    setOpenForm,
    formRender,
    selectedContent,
    setSelectedContent,
}) => {
    const theme = useSelector(getTheme);
    const [openAudience, setOpenAudience] = useState<boolean>(false);
    const [status, setStatus] = useState<Status>();
    const [form] = FormAntd.useForm();
    const currentUser = useSelector(getCurrentUser);
    const dispatch = useDispatch<AppDispatch>();

    const addService = (data: any, service: string) => {
        
        switch (service) {
            case "contact":
                dispatch(addContact(data));
                break;
            case "work_education":
                dispatch(addWorkEducation(data));
                break;
            case "place":
                dispatch(addPlace(data));
                break;
        }
    };

    const updateService = async (
        data: any,
        service: string,
        contentId: string
    ) => {
        
        switch (service) {
            case "contact":
                dispatch(updateContact({formdata:data,id:contentId}));
                break;
            case "work_education":
                dispatch(updateWorkEducation({formdata:data,id:contentId}));
                break;
            case "place":
                dispatch(udpatePlace({formdata:data,id:contentId}));
                break;
            case "profile":
                let {status,user_id,...formData} = data
                console.log({formData,id:contentId,attribute:Object.keys(data)[0]})
                dispatch(updateProfileAttribute({formData,id:contentId,attribute:Object.keys(data)[0]}))
                break;
        }
    };

    const onSubmit = async () => {
        try {
            const data = await form.validateFields();
            let result = { ...data };
            if (data.year) {
                data.year[0] = moment(data.year[0].$d).format("YYYY");
                data.year[1] = data.year[1]
                    ? moment(data.year[1].$d).format("YYYY")
                    : "now";

                result = {
                    ...result,
                    year_start: data.year[0],
                    year_end: data.year[1],
                };
            }
            if(data.dob){
                data.dob = moment(data.dob.$d).format('YYYY-MM-DD')
                result = {
                    dob:data.dob
                }
            }
            let { year: _, ...newData } = result;
            newData = {
                ...newData,
                status: status?.value,
                user_id: currentUser.id,
            };
            let service = formRender[0].type;
            
            if (selectedContent) {
                updateService(newData, service, selectedContent.introduceId);
            } else {
                addService(newData, service);
            }
            setOpenForm(false)
        } catch (error) {
            console.log(error)
        }
    };

    const renderInput = (type: string, title: string, name: string) => {
        switch (type) {
            case "text":
                return (
                    <CustomInput
                        hidden={name == "type" ? true : false}
                        theme={theme}
                        placeholder={title}
                    />
                );
            case "textarea":
                return (
                    <CustomTextArea
                        hidden={name == "type" ? true : false}
                        theme={theme}
                        placeholder={title}
                    />
                );
            case "range":
                return (
                    <CustomRangePicker
                        allowEmpty={[false, true]}
                        theme={theme}
                        picker="date"
                        format={"MM-YYYY"}
                    />
                );
            case "date":
                return (
                    <CustomDatePicker
                        theme={theme}
                        picker="date"
                        format={"DD-MM-YYYY"}
                    />
                );
        }
    };

    const initialValueRender = (
        name: string,
        title: string,
        selectedContent?: IntroduceItem
    ) => {
        if (name == "type") {
            return title;
        } else if (name == "year" || name == "dob") {
            return "";
        } else {
            if (selectedContent) {
                return selectedContent.introduceContent;
            } else {
                return "";
            }
        }
    };

    return (
        <Container theme={theme}>
            <CustomForm form={form} theme={theme}>
                {formRender.map((item, index) => {
                    return (
                        <FormItem
                            hidden={item.name == "type" ? true : false}
                            initialValue={initialValueRender(
                                item.name,
                                item.title,
                                selectedContent
                            )}
                            name={item.name}
                            theme={theme}
                            rules={[
                                {
                                    required: true,
                                    message: "Fields is required",
                                },
                            ]}
                        >
                            {renderInput(item.inputType, item.title, item.name)}
                        </FormItem>
                    );
                })}
            </CustomForm>
            <ButtonWrapper theme={theme}>
                <CustomButton
                    onClick={() => {
                        setOpenAudience(true);
                    }}
                    theme={theme}
                >
                    {status?.icon}
                    {status?.name}
                </CustomButton>
                <AudienceModal
                    open={openAudience}
                    setOpen={setOpenAudience}
                    setStatus={setStatus}
                />
                <ActionWrapper theme={theme}>
                    <CustomButton
                        onClick={() => {
                            setSelectedContent(undefined);
                            setOpenForm(false);
                        }}
                        theme={theme}
                    >
                        Cancel
                    </CustomButton>
                    <CustomButton
                        onClick={onSubmit}
                        className="submit"
                        theme={theme}
                    >
                        Submit
                    </CustomButton>
                </ActionWrapper>
            </ButtonWrapper>
        </Container>
    );
};

export default Form;
