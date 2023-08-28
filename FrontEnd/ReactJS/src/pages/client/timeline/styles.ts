import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    /* display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start; */
    display: grid;
    grid-template-columns:40% 1fr;
    grid-template-rows: auto;
    gap: 1rem;
    margin-top: 1rem;
`;

export const LeftWrapper = styled.div`
    grid-column: 1/2;
    grid-row: 1/2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: start;
`;

export const Introduce = styled.div`
    background: ${(props) => props.theme.primaryBackground};
    border-radius: 0.5rem;
    box-shadow: ${props => props.theme.boxshadow};
    padding: 1rem;
`;

export const About = styled.div`
    font-size: 1rem;
    color: ${props => props.theme.primaryFont};
    text-align: center;
    margin: 1.5rem 0;
`

export const InfoItem = styled.div`
    font-size: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    margin-top: 1rem;
    color: ${props => props.theme.primaryFont};

    svg{
        margin-right: 0.5rem;
        font-size: 1.25rem;
    }
`

export const Title = styled.h3`
    margin: 0;
    font-size: 1.2rem;
    color: ${props => props.theme.primaryFont};
    margin-bottom: 1rem;
`

export const Photos = styled.div`
    background: ${(props) => props.theme.primaryBackground};
    border-radius: 0.5rem;
    box-shadow: ${props => props.theme.boxshadow};
    margin-top: 1rem;
    padding: 1rem;
`;

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0.25rem;
`

export const Event = styled.div`
    background: ${(props) => props.theme.primaryBackground};
    border-radius: 0.5rem;
    box-shadow: ${props => props.theme.boxshadow};
    margin-top: 1rem;
    padding: 1rem;
`;

export const PostWrapper = styled.div`
    grid-column: 2/3;
    grid-row: 1/2;
    width: 100%;
`;
