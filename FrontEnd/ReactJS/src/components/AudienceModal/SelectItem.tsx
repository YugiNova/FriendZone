import { MdOutlineRadioButtonChecked, MdOutlineRadioButtonUnchecked, MdPublic } from "react-icons/md";
import {
    Description,
    IconWrapper,
    Name,
    RadioButton,
    SelectItemButton,
} from "./styles";
import { useState } from "react";
import { Button } from "antd";
import { useSelector } from "react-redux";
import { getTheme } from "../../redux/selectors";

interface AudienceType{
    name: string;
    description: string;
    checked: boolean;
    icon: React.ReactElement,
    value:string
}

interface Props {
    audienceType:AudienceType,
    audience: AudienceType[]
    setAudience: (audience: AudienceType[]) => void
}

const SelectItem: React.FC<Props> = ({audienceType,setAudience,audience}) => {
    const theme = useSelector(getTheme)
    
    const onSelect = () => {
        const newAudience = audience.map(item => {
            if(audienceType.name === item.name){
                return {...item,checked: true}
            }
            return {...item,checked: false}
        })
        setAudience(newAudience)
    }

    return (
        <SelectItemButton className={audienceType.checked?"active": ""} theme={theme} onClick={onSelect}>
            <IconWrapper theme={theme}>
                {audienceType.icon}
            </IconWrapper>
            <Name theme={theme}>{audienceType.name}</Name>
            <Description theme={theme}>{audienceType.description}</Description>
            <RadioButton theme={theme} checked={audienceType.checked}>
                {audienceType.checked ? <MdOutlineRadioButtonChecked />:<MdOutlineRadioButtonUnchecked />}
            </RadioButton>
        </SelectItemButton>
    );
};

export default SelectItem;
