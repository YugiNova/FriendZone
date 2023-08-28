import { useSelector } from "react-redux";
import { AddButton, Container, Title } from "./styles";
import { getTheme } from "../../redux/selectors";
import { Button, MenuProps } from "antd";
import {
    MdAddCircleOutline,
    MdModeEdit,
    MdMoreHoriz,
    MdOutlineDelete,
    MdPublic,
} from "react-icons/md";
import React, { useState } from "react";
import AudienceModal from "../AudienceModal";
import Form from "./Form";
import ContentItem from "./ContentItem";
import { IntroduceItem } from "../../interfaces/ComponentProps";

interface Props {
    title: string;
    items: IntroduceItem[];
    addMore?: boolean;
    editable?: boolean;
    profileStatus?: boolean;
    deletable?: boolean;
    formRender: FormItemType[]
}

interface FormItemType {
    name: string,
    type: string,
    title:string,
    inputType: "text"|"textarea"|"range"|"date";
}

const IntroduceSection: React.FC<Props> = ({
    title,
    items,
    addMore = true,
    editable = true,
    profileStatus = true,
    deletable = true,
    formRender
}) => {
    const theme = useSelector(getTheme);
    const [openForm, setOpenForm] = useState<boolean>(false);
    const [content,setContent] = useState<IntroduceItem|undefined>()

    const toggleForm = (content?:IntroduceItem) => {
        if (openForm) {
            return <Form setSelectedContent={setContent} selectedContent={content || undefined} openForm={openForm} setOpenForm={setOpenForm} formRender={formRender}/>;
        }
        return "";
    };

    const showAddMore = () => {
        if (addMore) {
            return (
                <AddButton
                    onClick={() => {
                        setOpenForm(true);
                    }}
                >
                    <MdAddCircleOutline /> Add more
                </AddButton>
            );
        }
    };

    return (
        <Container theme={theme}>
            <Title theme={theme}>{title}</Title>
            {showAddMore()}

            {toggleForm(content)}
            {items.map((item) => {
                return (
                    <ContentItem
                        content={item}
                        setContent={setContent}
                        setOpenForm={setOpenForm}
                        openForm={openForm}
                        editable={editable}
                        profileStatus={profileStatus}
                        deletable={deletable}
                    />
                );
            })}
        </Container>
    );
};

export default IntroduceSection;
