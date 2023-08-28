import { useDispatch, useSelector } from "react-redux";
import {
    Action,
    ActionButton,
    Audience,
    Content,
    DropdownButton,
    DropdownContent,
    DropdownCustom,
    Text,
    TextWrapper,
} from "./styles";
import { getTheme } from "../../../redux/selectors";
import { useState } from "react";
import AudienceModal from "../../AudienceModal";
import {
    MdGroup,
    MdLock,
    MdModeEdit,
    MdMoreHoriz,
    MdOutlineDelete,
    MdPublic,
} from "react-icons/md";
import { IntroduceItem } from "../../../interfaces/ComponentProps";
import { AppDispatch } from "../../../redux/store";
import { deleteByService } from "../../../redux/profileSlice";

interface Props {
    openForm: boolean;
    setOpenForm: (openForm: boolean) => void;
    setContent: (contentData: IntroduceItem) => void;
    content: IntroduceItem;
    editable: boolean;
    profileStatus: boolean;
    deletable: boolean;
}

interface Status {
    name: string;
    icon: React.ReactElement;
    value: string;
}

const ContentItem: React.FC<Props> = ({
    openForm,
    setOpenForm,
    setContent,
    content,
    editable,
    profileStatus,
    deletable,
}) => {
    const theme = useSelector(getTheme);
    const [open, setOpen] = useState<boolean>(false);
    const [status, setStatus] = useState<Status>();
    const dispatch = useDispatch<AppDispatch>()

    const onDelete = () => {
        console.log({id:content.introduceId,service:content.introduceType})
        dispatch(deleteByService({id:content.introduceId,service:content.introduceType}))
    }

    return (
        <Content>
            <TextWrapper>
                <Text theme={theme}>{content.introduceContent}</Text>
                <Text className="more-info" theme={theme}>
                    {content.introduceMoreContent}
                </Text>
            </TextWrapper>

            {editable ? (
                <Action>
                    {profileStatus ? (
                        <>
                            <Audience theme={theme}>
                                {content.introduceStatus == "public" ? (
                                    <MdPublic />
                                ) : content.introduceStatus == "friends" ? (
                                    <MdGroup />
                                ) : (
                                    <MdLock />
                                )}
                            </Audience>
                        </>
                    ) : (
                        ""
                    )}

                    <DropdownCustom
                        trigger={["hover"]}
                        placement="bottomRight"
                        dropdownRender={() => (
                            <DropdownContent theme={theme}>
                                <DropdownButton
                                    onClick={() => {
                                        setOpenForm(true);
                                        setContent(content);
                                    }}
                                    action="Edit"
                                    theme={theme}
                                >
                                    <MdModeEdit />
                                    Edit
                                </DropdownButton>
                                {deletable ? (
                                    <DropdownButton
                                        action="Delete"
                                        theme={theme}
                                        onClick={onDelete}
                                    >
                                        <MdOutlineDelete />
                                        Delete
                                    </DropdownButton>
                                ) : (
                                    ""
                                )}
                            </DropdownContent>
                        )}
                    >
                        <ActionButton theme={theme}>
                            <MdMoreHoriz />
                        </ActionButton>
                    </DropdownCustom>
                </Action>
            ) : (
                ""
            )}
        </Content>
    );
};

export default ContentItem;
