import styled from "styled-components";

export const Container = styled.div`
    width: 70%;
    margin: 0 auto;
    padding: 0 10rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content:start;
    align-items: center;
`

export const Title = styled.h1`
    margin: 0.5rem 0;
    color: ${props => props.theme.primaryFont};
`

export const ViewMore = styled.button`
    margin: 1rem 0;
    padding:0.5rem;
    font-size: 1rem;
    border-radius: 0.5rem;
    border:none;
    background-color: #1b74e4;
    color:white;
    cursor: pointer;
`