import { Avatar } from "antd";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 70%;
    margin: 0 auto;
    padding: 1rem 0;
`

export const Header = styled.div`
    background: ${props => props.theme.primaryBackground};
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: ${props => props.theme.boxshadow};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Cover = styled.div`
    width: 100%;
    border-radius: 0.5rem;
    overflow: hidden;
    height: 18rem;

    img{
        width: 100%;
    }

    .default{
        width: 100%;
        height: 100%;
        background-color: #bfbfbf;
    }
`

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position:relative;
    padding-left: 11rem;
    margin-bottom: 3rem;
`

export const AvatarCustom = styled(Avatar)`
    position: absolute;
    top: -3rem;
    left: 1rem;
    border: 0.3rem solid ${props => props.theme.primaryBackground};
`

export const LeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
`

export const Name = styled.div`
    font-size: 2rem;
    font-weight: bold;
    color: ${props => props.theme.primaryFont};
`

export const NickName = styled.div`
    font-size: 1.25rem;
    color: ${props => props.theme.secondaryFont};
`

export const Count = styled.div`
    font-size: 1rem;
    color: ${props => props.theme.secondaryFont};
`

export const RighWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
`

export const ActionButton = styled.button`
    font-size: 1.1rem;
    margin-left: 0.5rem;
    background: ${props => props.theme.primaryColor};
    border: none;
    padding:0.5rem;
    max-width: 15rem;
    border-radius: 0.5rem;
    color:white;
    cursor: pointer;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    svg{
        margin-right: 0.25rem;
    }
`

export const NavBar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
`

export const NavItem = styled(NavLink)`
    text-decoration: none;
    font-size: 1.1rem;
    margin-right: 2rem;
    padding-bottom: 0.5rem;
    color: ${props => props.theme.primaryFont};
    border-bottom: 3px solid transparent;
    transition: 0.5s ease;

    &:hover{
        border-bottom: 3px solid ${props => props.theme.primaryColor};
        color: ${props => props.theme.primaryColor};
    }

    &.active{
        border-bottom: 3px solid ${props => props.theme.primaryColor};
        color: ${props => props.theme.primaryColor};
    }
`

export const Body = styled.div`
    width: 100%;
`


