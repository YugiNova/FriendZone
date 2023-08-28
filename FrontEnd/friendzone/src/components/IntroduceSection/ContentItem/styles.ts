import { Button, Dropdown } from "antd";
import styled from "styled-components";

interface Props {
    action?:string
}

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    margin: 0.55rem 0;
`

export const TextWrapper = styled.div`

`

export const Text = styled.div`
    font-size: 1.25rem;
    color: ${props => props.theme.primaryFont};

    &.more-info{
        font-size: 1rem;
        color: ${props => props.theme.secondaryFont};
    }
`

export const Action = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
`

export const Audience = styled.button`
    font-size: 1.5rem;
    display: flex;
    justify-content:center;
    align-items: center;
    margin-right: 0.5rem;
    padding: 0;
    background: transparent;
    border:none;
    color: ${props => props.theme.secondaryFont};
    cursor: pointer;
`

export const DropdownCustom = styled(Dropdown)`
    
`

export const ActionButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.25rem;
    height: auto;
    border-radius: 50%;
    font-size: 1.5rem;
    background: ${props => props.theme.secondaryBackground};
    color: ${props => props.theme.secondaryFont};
    border: none;
`

export const DropdownContent = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    overflow: hidden;
    background: ${props => props.theme.secondaryBackground};
    padding: 0.3rem;
`

export const DropdownButton = styled.button<Props>`
    border: none;
    font-size: 1rem;
    padding:0.5rem 1rem;
    cursor: pointer;
    color: ${props => props.theme.secondaryFont};
    background: transparent;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    border-radius: 0.5rem;
    transition: 0.25s ease;

    svg{
        font-size: 1.25rem;
        margin-right: 0.25rem;
    }

    &:hover{
        background: ${props => props.theme.primaryBackground};
        color: ${props => props.action == "Edit"? "blue": "red"};
    }
`