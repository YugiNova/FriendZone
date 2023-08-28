import { Avatar, Input } from "antd";
import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 2rem 1fr;
    grid-template-rows: auto;
    column-gap: 0.5rem;
`;

export const AvatarCustom = styled(Avatar)`
    grid-column: 1/2;
    grid-row: 1/2;
`;

export const InputWrapper = styled.div`
    grid-column: 2/3;
    grid-row: 1/2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    background: ${(props) => props.theme.secondaryBackground};
    padding: 0.75rem;
    border-radius: 1rem;
`;

export const TextAreaCustom = styled(Input.TextArea)`
    grid-column: 1/3;
    grid-row: 1/2;
    color: ${(props) => props.theme.primaryFont};
    padding: 0;

    &::placeholder {
        color: ${(props) => props.theme.secondaryFont};
    }
`;

export const ActionWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ActionItem = styled.div`
    grid-column: 1/2;
    grid-row: 2/3;
    color: ${(props) => props.theme.secondaryFont};
    font-size: 1rem;
    margin-right: 1rem;
`;

export const SendButton = styled.div`
    grid-column: 2/3;
    grid-row: 2/3;
    display: flex;
    justify-content: end;
    align-items: center;

    button {
        color: ${(props) => props.theme.secondaryFont};
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        background:transparent;
        border: none;
        cursor: pointer;

        &:hover{
            color: #1677ff;
        }
    }
`;
