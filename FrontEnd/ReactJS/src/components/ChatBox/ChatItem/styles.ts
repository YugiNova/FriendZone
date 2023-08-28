import styled from "styled-components";

interface Props {
    position?:boolean
}

export const Container = styled.div<Props>`
    width: 100%;
    display: flex;
    justify-content: ${props => props.position?"end":"start"};
    align-self: center;
    padding: 0.15rem 0;
`

export const Content = styled.div<Props>`
    background: ${props => props.position? props.theme.primaryColor : props.theme.secondaryFont};
    padding:0.5rem 0.75rem;
    border-radius: 1rem;
    color: ${props => props.theme.primaryFont};
`