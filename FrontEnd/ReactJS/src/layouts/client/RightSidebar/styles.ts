import { Input } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
    src?: string;
    status?: string;
}

export const Container = styled.div`
    padding: 1rem;
    width: 100%;
`;

export const Wrapper = styled.div`
    box-shadow: ${(props) => props.theme.boxshadow};
    width: 100%;
    height: 100%;
    padding: 1rem;
    background: ${(props) => props.theme.primaryBackground};
    border-radius: 0.5rem;
`

export const CustomInput = styled(Input)`

`

export const ListWrapper = styled.div`
    width: 100%;
    height: calc(100vh - 11.5rem);
    overflow-y: scroll;

    /* &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #f5f5f5;
    } */
    &::-webkit-scrollbar {
        width: 0;
    }
    /* &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #555;
    } */

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;    
`;

export const Title = styled.div`
    width: 100%;
    margin: 1rem 0 0.5rem 0;
    color: ${(props) => props.theme.secondaryFont};
    font-size: 1.1rem;
`;

export const UserItem = styled.button<Props>`
    width: 100%;
    display: grid;
    grid-template-columns: 2.5rem 1fr 1rem;
    grid-template-rows: auto;
    gap: 0.75rem;
    justify-items: start;
    align-items: center;
    padding: 0.5rem;
    text-decoration: none;
    color: ${(props) => props.theme.primaryFont};
    background: transparent;
    border-radius: 0.5rem;
    transition: 0.25s ease;
    border: none;
    cursor: pointer;

    &:hover{
        background: ${(props) => props.theme.secondaryBackground};
    }
`;

export const AvatarWrapper = styled.div`
    grid-column: 1/2;
    grid-row: 1/2;
`;

export const Avatar = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-image: url(${props => props.src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Name = styled.div`
    grid-column: 2/3;
    grid-row: 1/2;
    font-weight: 650;
    display: flex;
    justify-content: start;
    align-items: center;  
`;

export const Status = styled.div<Props>`
    grid-column: 3/4;
    grid-row: 1/2;
    display: flex;
    justify-content: center;
    align-items: center;  
    color: ${(props) => props.theme.secondaryFont};
`;

export const Circle = styled.div<Props>`
    width: 0.65rem;
    height: 0.65rem;
    border-radius: 50%;
    background: green;
`;

