import { useDispatch, useSelector } from "react-redux"
import { getCurrentUser, getTheme } from "../../redux/selectors"
import {CustomSwitch, PopContent, Header, ToggleTheme, Title } from "./styles"
import { useState,useEffect } from "react";
import ColorList from "./ColorList";
import { toggleDarkTheme, toggleLightTheme } from "../../redux/themeSlice";
import { updateTheme } from "../../redux/authSlice";
import { AppDispatch } from "../../redux/store";

const PopoverContent:React.FC = () => {
    const theme = useSelector(getTheme)
    const [checked,setChecked] = useState<boolean>(false)
    const dispatch = useDispatch<AppDispatch>()
    const currentUser = useSelector(getCurrentUser)

    useEffect(()=>{
        if(currentUser.profile?.theme == "dark"){
            setChecked(true)
        }
    },[])

    const onChange = () => {
        if(currentUser.profile?.theme == "dark"){
            dispatch(updateTheme({theme:"light",slug:currentUser.slug}))
            setChecked(false)
        }else{
            dispatch(updateTheme({theme:"dark",slug:currentUser.slug}))
            setChecked(true)
        }
    }
    return(
        <PopContent theme={theme}>
            <Title theme={theme}>Theme</Title>
            <Header theme={theme}>Choose Color Theme</Header>
            <ColorList/>
            <ToggleTheme>
                <Header theme={theme}>Dark mode</Header>
                <CustomSwitch theme={theme} checked={checked} onChange={onChange}/>
            </ToggleTheme>
        </PopContent>
    )
}

export default PopoverContent