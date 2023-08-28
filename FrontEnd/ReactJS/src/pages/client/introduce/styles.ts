import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    border-radius: 0.5rem;
    box-shadow: ${props => props.theme.boxshadow};
    background: ${props => props.theme.primaryBackground};
    margin-top: 1rem;

    display: grid;
    grid-template-columns: 18rem 1fr;
    grid-template-rows: auto;
`

export const Navbar = styled.div`
    grid-column: 1/2;
    grid-row: 1/2;
    display: flex;
    flex-direction: column;
    border-right: 1px solid ${props => props.theme.secondaryFont};
    padding: 1rem;

    h3{
        margin: 0;
        font-size: 1.75rem;
        color: ${props => props.theme.primaryFont};
    }
`

export const NavItem = styled(NavLink)`
    text-decoration: none;
    color: ${props => props.theme.secondaryFont};
    font-size: 1.2rem;
    padding: 0.5rem;
    margin: 0.25rem 0;
    border-radius: 0.5rem;
    transition: 0.2s ease;
    font-weight: bold;

    &:hover{
        background: ${props => props.theme.secondaryBackground};
    }

    &.active{
        color: ${props => props.theme.primaryColor};
        background: rgba(206, 68, 16,0.5);
    }
`

export const Content = styled.div`
    grid-column: 2/3;
    grid-row: 1/2;
    padding: 1rem;
`