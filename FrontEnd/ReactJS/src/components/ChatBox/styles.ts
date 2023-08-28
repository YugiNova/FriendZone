import { Avatar, Form, Input } from "antd";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 18rem;
    box-shadow: ${props => props.theme.boxshadow};
    border-radius: 0.5rem;
    overflow: hidden;
    margin-left: 1rem;
`

export const Header = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.theme.primaryColor};
    padding: 0.5rem;
`

export const LeftSide = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const AvatarCustom = styled(Avatar)`

`

export const Name = styled.div`
    font-size: 1rem;
    margin-left: 0.5rem;
`

export const RightSide = styled.div`

`

export const Exit = styled.button`
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
`

export const MessageList = styled.div`
    height: 15rem;
    background: ${props => props.theme.primaryBackground};
    padding: 0.5rem;
    /* display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center; */
    overflow-y: scroll;
`

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:end;
    padding: 0.5rem;
    background: ${props => props.theme.primaryBackground};
`

export const InputCustom = styled(Input.TextArea)`
    border-radius: 1rem;
    background: ${props => props.theme.secondaryBackground};
    color: ${props => props.theme.primaryFont};
    font-size: 1rem;

    &::placeholder{
        color: ${props => props.theme.secondaryFont};
    }

    &:hover{
        background: ${props => props.theme.secondaryBackground};
    }

    &:focus{
        background: ${props => props.theme.secondaryBackground};
    }
`

export const SendButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    margin-left: 0.5rem;
    font-size: 1.25rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #1677ff;
    border-radius: 50%;

    &:hover{
        background: ${props => props.theme.secondaryBackground};
    }
`