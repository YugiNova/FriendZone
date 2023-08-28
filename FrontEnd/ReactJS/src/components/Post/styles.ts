import { Avatar, Typography } from "antd";
import styled from "styled-components";

interface Props {
    liked?: boolean;
}

export const Container = styled.div`
    background: ${(props) => props.theme.primaryBackground};
    margin-top: 1rem;
    box-shadow: ${(props) => props.theme.boxshadow};
    border-radius: 0.5rem;
    padding: 1rem;
    padding-bottom: 0;
    width: 100%;
`;

export const Header = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 3rem 1fr;
    grid-template-rows: auto auto;
    justify-items: start;
    align-items: center;
    column-gap: 0.5rem;
`;

export const AvatarCustom = styled(Avatar)`
    grid-column: 1/2;
    grid-row: 1/3;
    cursor: pointer;
`;

export const Name = styled.div`
    grid-column: 2/3;
    grid-row: 1/2;
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme.primaryFont};
    cursor: pointer;
`;

export const Time = styled.div`
    grid-column: 2/3;
    grid-row: 2/3;
    font-size: 0.8rem;
    color: ${(props) => props.theme.secondaryFont};
`;

export const Content = styled(Typography.Paragraph)`
    text-align: justify;
    margin: 1rem 0;
    color: ${(props) => props.theme.primaryFont};
    font-size: 1rem;
    line-height: 1.5;
`;

export const MediaWrapper = styled.div``;

export const CountWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    font-size: 0.8rem;

    svg{
        margin-right: 0.25rem;
        color: #1677ff;
    }
`

export const Count = styled.div`
    color: ${(props) => props.theme.secondaryFont};
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
`

export const AcitonWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 0.5px solid ${(props) => props.theme.secondaryFont};
    border-left: none;
    border-right: none;
    border-bottom: none;
    padding: 0.25rem 0;
`;

export const ActionButton = styled.button<Props>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0.5rem 0;
    font-size: 1rem;
    color: ${(props) => props.theme.secondaryFont};
    border-radius: 0.5rem;
    border: none;
    background: transparent;
    cursor: pointer;
    transition: 0.25s ease;
    font-weight: bold;

    &.like{
        color: #1b74e4;
    }

    &.sad{
        color: #f1c40f;
    }

    &.haha{
        color: #f1c40f;
    }

    &.angry{
        color: #e74c3c;
    }

    svg {
        margin-right: 0.25rem;
    }

    &:hover {
        background: ${(props) => props.theme.secondaryBackground};
        color: ${(props) => props.theme.primaryColor};
    }
`;
