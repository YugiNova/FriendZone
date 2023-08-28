import styled from "styled-components";
import { Popover,Switch,Radio, Typography } from 'antd';

interface Props {
    bgColor?:string,
    src?:string
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

export const Avatar = styled.img<Props>`
    background-image: ${props => props.src};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
`

export const PopContent = styled.div`
    background: transparent;
    display:flex;
    flex-direction: column;
    width: 20rem;
`

export const Title = styled.h2`
    margin: 0;
    color: ${props => props.theme.primaryFont};
    margin-bottom: 1rem;
    font-size: 1.5rem;
    padding-left: 1rem;
`

export const OptionItem = styled.button`
    background-color: transparent;
    border: none;
    text-align: left;
    padding: 1rem;
    border-radius: 0.5rem;
    color: ${props => props.theme.primaryFont};
    font-size: 1.25rem;
    font-weight: 600;
    cursor: pointer;

    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;

    svg{
        font-size: 1.5rem;
        margin-right: 0.5rem;
    }
    
    &:hover{
        background: ${props => props.theme.primaryBackground};
    }
`
