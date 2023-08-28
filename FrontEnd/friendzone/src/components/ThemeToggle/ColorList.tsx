import { MdDone } from "react-icons/md";
import { ColorButton, ColorGroup } from "./styles";
import { useEffect, useState } from "react";
import { Radio } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { changePrimaryColor } from "../../redux/themeSlice";
import { getCurrentUser, getTheme } from "../../redux/selectors";
import { updateColor } from "../../redux/authSlice";
import { AppDispatch } from "../../redux/store";

interface Color {
    checked: boolean;
    value: string;
}

const ColorList: React.FC = () => {
    const [color, setColor] = useState<Color[]>([
        {
            checked: true,
            value: "#CE4410",
        },
        {
            checked: false,
            value: "#ff3b30",
        },
        {
            checked: false,
            value: "#132977",
        },
        {
            checked: false,
            value: "#4cd964",
        },
        {
            checked: false,
            value: "#ffcc00",
        },
        {
            checked: false,
            value: "#ff9500",
        },
        {
            checked: false,
            value: "#8e8e93",
        },
        {
            checked: false,
            value: "#D2691E",
        },
        {
            checked: false,
            value: "#228B22",
        },
    ]);
    const theme = useSelector(getTheme);
    const dispatch = useDispatch<AppDispatch>();
    const currentUser = useSelector(getCurrentUser)
    
    useEffect(() => {
        //handle checked
        const newColor = color.map((item) => {
            if (theme.primaryColor === item.value) {
                return { ...item, checked: true };
            }
            return { ...item, checked: false };
        });
        setColor(newColor);
    }, []);

    const changeColor = (checkedColor: string) => {
        //handle checked
        const newColor = color.map((item) => {
            if (checkedColor === item.value) {
                return { ...item, checked: true };
            }
            return { ...item, checked: false };
        });
        setColor(newColor);

        dispatch(updateColor({
            color:checkedColor,
            slug: currentUser.slug
        }))
    };

    return (
        <ColorGroup>
            {color.map((item) => {
                return (
                    <ColorButton
                        key={item.value}
                        onClick={() => {
                            changeColor(item.value);
                        }}
                        bgColor={item.value}
                    >
                        {item.checked ? <MdDone /> : ""}
                    </ColorButton>
                );
            })}
        </ColorGroup>
    );
};
export default ColorList;
