import { Modal } from "antd";
import styled from "styled-components";

interface Props {
    checked?: boolean
}

export const ModalCustom = styled(Modal)`
    
    .ant-modal-content{
        padding: 0;
        width: auto;
        overflow: hidden;
    }
`

export const Container = styled.div`
    padding: 1rem;
    width: 100%;
    background: ${props => props.theme.primaryBackground};
`
export const Title = styled.h2`
    text-align: center;
    font-size: 1.5rem;
    color: ${props => props.theme.primaryFont};
`

export const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const SelectItemButton = styled.button`
    width: 100%;
    display: grid;
    grid-template-columns:4rem 1fr 2rem;
    grid-template-rows: auto auto;
    justify-items: start;
    align-items: center;
    border-radius: 0.5rem;
    border: none;
    padding:1rem;
    margin: 0.25rem 0;
    cursor: pointer;
    background: transparent;
    

    &:hover{
        background: ${props => props.theme.secondaryBackground};
    }

    &.active{
        background: rgba(206, 68, 16, 0.5);
    }
`


export const IconWrapper = styled.div`
    grid-column: 1/2;
    grid-row: 1/3;
    
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 50%;
    background-color:${props=>props.theme.secondaryFont};
    font-size: 2rem;
`

export const Name = styled.div`
    grid-column: 2/3;
    grid-row: 1/2;
    color: ${props => props.theme.primaryFont};
    width: 100%;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: left;
`

export const Description = styled.div`
    grid-column: 2/3;
    grid-row: 2/3;
    color: ${props => props.theme.secondaryFont};
    width: 100%;
    font-size: 1.2rem;
    text-align: left;
`

export const RadioButton = styled.div<Props>`
    grid-column: 3/4;
    grid-row: 1/3;
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    font-size: 1.5rem;
    color: ${props => props.checked?"#2e89ff": props.theme.secondaryFont} ;
`

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: end;
    align-items:center;
    margin-top: 1rem;
`

export const CustomButton = styled.button`
    border: none;
    margin-left: 1rem;
    padding:0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;

    &.cancel{

    }

    &.submit{
        background: ${props => props.theme.primaryColor};
        color: white;
    }
`
