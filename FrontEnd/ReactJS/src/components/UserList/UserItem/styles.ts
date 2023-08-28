import { Avatar } from "antd";
import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme.primaryBackground};
    box-shadow:${props => props.theme.boxshadow};
    padding: 1rem;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    border-radius:0.5rem;
`

export const AvatarCustom = styled(Avatar)`

`

export const Name = styled.h3`
    margin: 0;
    color: ${props => props.theme.primaryFont};

    &.nickname{
        font-weight: normal;
        ${props => props.theme.secondaryFont};
    }
`

export const ActionWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`

export const ActionButton = styled.button`
    padding: 0.5rem;
    font-size:1rem;
    width: 100%;
    margin-top: 1rem;
    border-radius:0.5rem;
    border:none;
    color:white;
    cursor: pointer;
    transition:0.5 ease;

    &.action{
        background: ${props => props.theme.primaryColor};
    }

    &.viewprofile{
        border:1px solid ${props => props.theme.primaryColor};
        color: ${props => props.theme.primaryColor};
        background-color: transparent;
    }

    &:hover{
        box-shadow:${props => props.theme.boxshadow};
    }
`