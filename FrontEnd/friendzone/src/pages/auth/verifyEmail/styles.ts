import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    background: #e8f1fa;
`

export const Logo = styled.div`
    width: 20rem;
    margin-bottom: 1rem;

    img{
        width: 100%;
    }
`

export const ContentWrapper = styled.div`
    background: white;
    width: 40rem;
    font-size: 1.25rem;
    border-radius: 0.5rem;
    box-shadow: ${props => props.theme.boxshadow};
`

export const Title = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    padding: 1rem;
    border-bottom: 3px solid #e8f1fa;
`

export const Content = styled.div`
    padding: 2.5rem 1rem;
    text-align: left;
    line-height: 1.5;
`

export const CustomButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-top: 3px solid #e8f1fa;

    button{
        font-size: 1rem;
        font-weight:bold;
        background-color: rgb(206,68,16);
        border: none;
        padding: 1rem;
        border-radius: 0.5rem;
        color: white;
        cursor: pointer;
        transition: 0.25s ease;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        &.cancel{
            background-color: #e4e6eb;
            color: black;
           
        }

        p{
            margin: 0;
            margin-left: 0.25rem;
        }

        &:hover{
            filter: opacity(50%);
        }
        &:active{
            filter: opacity(100%);
        }
    }
`
