import { Select, Input, Avatar, Button } from "antd";
import ReactImageGallery from "react-image-gallery";
import styled from "styled-components";
const { TextArea } = Input;
const { Option } = Select;

export const Container = styled.div`
    background: ${(props) => props.theme.primaryBackground};
    border-radius: 0.5rem;
    padding: 1rem;
    box-shadow: ${(props) => props.theme.boxshadow};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const Header = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 3rem 1fr;
    grid-template-rows: auto auto;
    gap: 0.5rem;
    justify-items: start;
    align-items: center;
`;

export const AvatarCustom = styled(Avatar)`
    grid-column: 1/2;
    grid-row: 1/3;
`;

export const Name = styled.div`
    grid-column: 2/3;
    grid-row: 1/2;
    font-size: 1.2rem;
    font-weight: bold;
    color: ${(props) => props.theme.primaryFont};
`;

export const AudienceButton = styled.button`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    font-size: 0.75rem;
    padding: 0.1rem 0.5rem;
    border-radius: 0.5rem;
    border: none;
    background: ${props => props.theme.secondaryBackground};
    cursor: pointer;

    svg{
        font-size: 1.25rem;
        margin-right: 0.5rem;
    }
`

export const TextAreaCustom = styled(TextArea)`
    margin: 1rem 0;
    background: ${(props) => props.theme.secondaryBackground};
    color: ${(props) => props.theme.primaryFont};
    font-size: 1rem;

    ::placeholder{
        color: ${(props) => props.theme.secondaryFont};
    }

    &:hover{
        background: ${(props) => props.theme.secondaryBackground};
    }

    &:focus{
        background: ${(props) => props.theme.secondaryBackground};
    }
`;

export const PreviewWrapper = styled.div`
    width: 100%;
    margin-bottom: 1rem;
    position:relative;
`

export const RemoveImageButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    padding: 0.25rem 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    margin: 0.5rem;
    border:1px solid ${props => props.theme.primaryColor};
    background: transparent;
    color: ${props => props.theme.primaryColor};
    border-radius:1rem;
    cursor: pointer;
    transition: 0.25s ease;

    svg{
        font-size: 1.25rem;
    }

    &:hover{
        background-color: ${props => props.theme.primaryColor};
        color: white;
    }
`

export const Preview = styled(ReactImageGallery)`
    width: 100%;
`

export const Footer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Activity = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
`;

export const ActivityButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    margin-right: 1rem;
    font-size: 1rem;
    background: transparent;
    color: ${(props) => props.theme.primaryFont};
    cursor: pointer;
    border-radius: 0.5rem;
    padding: 0.25rem;
    border: none;
    transition: 0.25s ease;

    svg {
        font-size: 1.25rem;
        margin-right: 0.25rem;
    }

    &:hover{
        background: ${props => props.theme.secondaryBackground};
    }
`;

export const PostButton = styled.button`
    background: ${(props) => props.theme.primaryColor};
    border: 1px solid ${(props) => props.theme.primaryColor};
    padding: 0.5rem;
    color:white;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.5s ease;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 1rem;

    svg{
        margin-right: 0.25rem;
        font-size: 1.25rem;
    }

    &:hover {
        background: ${(props) => props.theme.primaryBackground};
        border: 1px solid ${(props) => props.theme.primaryColor};
        color: ${(props) => props.theme.primaryColor};
    }
`;
