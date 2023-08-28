import styled from "styled-components";
import { Popover, Switch, Radio, Typography } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
    bgColor?: string;
    src?: string;
}

export const Container = styled(Popover)`
    margin-left: 1rem;
`;

export const CustomButton = styled.button`
    background: transparent;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${(props) => props.theme.primaryColor};
    padding: 0;
    border: none;
`;

export const PopContent = styled.div`
    background: transparent;
`;

export const Title = styled.h2`
    margin: 0;
    color: ${(props) => props.theme.primaryFont};
    margin-bottom: 1rem;
    font-size: 1.5rem;
    padding-left: 1rem;
`;

export const NotificationList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    max-height: 20rem;
    overflow-y: hidden;

    .infinite-scroll-component {
        overflow-y: scroll;
        &::-webkit-scrollbar-track {
            border-radius: 10px;
            background-color: transparent;
        }

        &::-webkit-scrollbar {
            width: 8px;
            background-color: transparent;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 10px;

            background-color: transparent;
        }
    }
`;

export const NotificationWrapper = styled.button`
    background-color: transparent;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    margin: 0;
    color: ${(props) => props.theme.primaryFont};
    display: grid;
    grid-template-columns: 3rem 1fr 0.75rem;
    grid-template-rows: auto auto;
    column-gap: 1rem;
    row-gap: 0.5rem;
    justify-items: start;
    /* align-items: center; */
    line-height: 1.25;
    padding: 0.5rem;
    width: 20rem;

    &:hover {
        background: ${(props) => props.theme.primaryBackground};
    }
`;

export const AvatarWrapper = styled.div<Props>`
    grid-column: 1/2;
    grid-row: 1/3;
    display: flex;
    justify-content: center;
    align-items: center;
`;

// export const Avatar = styled(Avatar)<Props>`
//     background-image: ${(props) => props.src};
//     background-position: center;
//     background-size: cover;
//     background-repeat: no-repeat;
//     border-radius: 50%;
//     width: 3rem;
//     height: 3rem;
// `;

export const Content = styled(Typography.Paragraph)`
    grid-column: 2/3;
    grid-row: 1/2;
    color: ${(props) => props.theme.primaryFont};
    font-size: 1rem;
    font-weight: normal;
    text-align: left;
    &.ant-typography {
        margin: 0;
        line-height: 1.25;
    }

    span {
        font-weight: bold;
    }
`;

export const Time = styled.div`
    grid-column: 2/3;
    grid-row: 2/3;
    font-size: 0.75rem;
    color: ${(props) => props.theme.secondaryFont};
    font-weight: normal;
`;

export const UnreadDot = styled.div`
    grid-column: 3/4;
    grid-row: 1/3;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    &.unread {
        &::before {
            content: "";
            display: block;
            background-color: ${(props) => props.theme.primaryColor};
            width: 0.75rem;
            height: 0.75rem;
            border-radius: 50%;
        }
    }
`;
