import { Modal } from "antd";
import styled from "styled-components";

interface Props {
    layout?: string;
}

export const CustomModal = styled(Modal)`
    height: auto;
    width: auto;
    top: 5vh;
    .ant-modal-content {
        padding: 0;
        width: auto;
        background-color: ${(props) => props.theme.primaryBackground};
    }
`;

export const Container = styled.div<Props>`
    width: 100%;

    height: auto;
    display: grid;
    grid-template-columns: ${(props) => props.layout} 35rem;
    grid-template-rows: 90vh;
    border-radius: 1rem;
    overflow: hidden;
`;

export const Media = styled.div`
    grid-column: 1/2;
    grid-row: 1/2;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border-right: 1px solid black; */
    padding: 1rem;

    img {
        max-width: 100%;
        max-height: 100%;
    }
`;

export const PostWrapper = styled.div`
    grid-column: 2/3;
    grid-row: 1/2;
    height: 100%;
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
  
        background-color: #555;
    }
`;

export const PostContainer = styled.div``;

export const CommentContainer = styled.div`
    padding: 0 1rem;
`;
