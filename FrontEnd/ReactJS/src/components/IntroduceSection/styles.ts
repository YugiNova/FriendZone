import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 2.5rem;
`

export const Title = styled.div`
    margin: 0;
    font-size: 1.2rem;
    color: ${props => props.theme.primaryFont};
    font-weight: bold;
    margin-bottom: 0.5rem;
`

export const AddButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    background: transparent;
    border: none;
    color: #2e89ff;
    cursor: pointer;
    padding: 0;
    margin: 0.5rem 0;

    svg{
        margin-right: 0.25rem;
        font-size: 1.5rem;
    }
`