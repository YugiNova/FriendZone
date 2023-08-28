import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background: ${props => props.theme.primaryBackground};
    border-radius: 0.5rem;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    box-shadow: ${props => props.theme.boxshadow};
`

export const MenuItem = styled(NavLink)`
    text-decoration: none;
    width: 100%;
    font-size: 1rem;
    color: ${props => props.theme.secondaryFont};
    padding: 0.25rem;

    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    font-weight: 600;
    border-radius: 0.5rem;
    transition: 0.5s ease;

    &:hover{
        background: ${props => props.theme.secondaryBackground};
        color: ${props => props.theme.primaryColor};
    }

    &.active{
        background: ${props => props.theme.secondaryBackground};
    }
`

export const IconWrapper = styled.div`
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.primaryColor};
    border-radius: 50%;
    margin-right: 1rem;
    font-size: 1.25rem;
    color: ${props => props.theme.primaryBackground};
`