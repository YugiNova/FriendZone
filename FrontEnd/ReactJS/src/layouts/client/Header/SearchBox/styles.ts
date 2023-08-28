import { Input } from "antd";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background: ${props => props.theme.primaryColor};
`

export const CustomSearch = styled(Input)`
    font-size: 1.1rem;
    border-radius: 1rem;
    border-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.primaryFont};

    &:hover{
        border-color: ${props => props.theme.primaryColor};
    }

    &.ant-input-affix-wrapper{
        background: ${props => props.theme.secondaryBackground};

        .ant-input{
            background: transparent;
            color: ${props => props.theme.primaryFont};

            &::placeholder{
                color: ${props => props.theme.secondaryFont};
            }
        }
    }
`