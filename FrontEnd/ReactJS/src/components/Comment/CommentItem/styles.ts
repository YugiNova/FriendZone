import { Avatar } from "antd";
import styled from "styled-components";

interface Props {
    display?:string
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    position: relative;
`

export const ParentLine = styled.div<Props>`
    position: absolute;
    width: 1px;
    height: 90%;
    background: green;
    left: -1.5rem;
    top: 0;
    display: ${props => props.display};
`

export const MainWrapper = styled.div`
    display:grid;
    grid-template-columns: 2rem auto;
    grid-template-rows: auto auto;
    column-gap: 0.5rem;
    justify-content: start;
    align-items: start;
    padding: 0.5rem 0;
    position: relative;
`



export const CurrentLine = styled.div<Props>`
    position: absolute;
    width: 1.5rem;
    height: 3rem;
    border-left:1px solid black;
    border-bottom: 1px solid black;
    border-radius: 0 0 0 0.5rem;
    right: 100%;
    top: -1.25rem;
    display:block;
`


export const ChildrenLine = styled.div<Props>`
    position: absolute;
    width: 1px;
    height: 70%;
    background: red;
    left: 1rem;
    top: 2.6rem;
    display: ${props => props.display};
`

export const AvatarCusom = styled(Avatar)`
    grid-column: 1/2;
    grid-row: 1/2;
`

export const ContentWrapper = styled.div`
    grid-column: 2/3;
    grid-row: 1/2;
    width: 100%;
`

export const Wrapper = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: left;

    background: ${props => props.theme.secondaryBackground};
    color: ${props => props.theme.primaryFont};

    padding: 0.5rem;
    border-radius: 1rem;
`

export const Name = styled.div`
    font-size: 0.9rem;
    font-weight: bold;
`

export const Content = styled.div`
    font-size: 0.9rem;
    text-align: left;
`

export const ActionWrapper = styled.div`
    grid-column: 2/3;
    grid-row: 2/3;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: end;
    margin-left: 0.5rem;
`

export const Action = styled.button`
    margin-right: 0.5rem;
    font-size: 0.85rem;
    font-weight: bold;
    padding: 0;
    border: none;
    background: transparent;
    color: ${props => props.theme.secondaryFont};
    cursor: pointer;
`

export const Time = styled.div`
    font-size: 0.85rem;
    color: ${props => props.theme.secondaryFont};
`

export const ChildrenWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    padding-left: 2.5rem;
    width: auto;
    span{
        margin: 0;
    }
`

export const ShowMore = styled.button`
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    font-size: 0.9rem;

    &:hover{
        text-decoration: underline;
    }
`

export const ReplyWrapper = styled.div`
    width: 100%;
    margin-top: 0.5rem;
    padding-left: 2.5rem;
`
