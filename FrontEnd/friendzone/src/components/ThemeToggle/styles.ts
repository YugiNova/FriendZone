import styled from "styled-components";
import { Popover,Switch,Radio } from 'antd';

interface Props {
    bgColor:string,
}

export const Container = styled(Popover)`
    margin-left: 1rem;
`

export const CustomButton = styled.button`
    background:transparent;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${props => props.theme.primaryColor};
    padding:0;
    border: none;
`

export const PopContent = styled.div`
    background: transparent;
`

export const Title = styled.h2`
    margin: 0;
    color: ${props => props.theme.primaryFont};
    margin-bottom: 1rem;
    font-size: 1.5rem;
`

export const Header = styled.h4`
    margin: 0;
    color: ${props => props.theme.primaryFont};
`

export const ColorGroup = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    grid-template-rows: 1fr 1fr;
    gap: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 1.25rem;
`

export const ColorButton = styled.button<Props>`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: none;
    background: ${props => props.bgColor};

    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
`

export const ToggleTheme = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const CustomSwitch = styled(Switch)`
    background: ${props => props.checked?props.theme.primaryColor:""} !important;
`
