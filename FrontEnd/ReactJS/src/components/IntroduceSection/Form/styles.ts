import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import styled from "styled-components";
import { DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
`;

export const CustomForm = styled(Form)``;

export const FormItem = styled(Form.Item)``;

export const Title = styled.div`
    font-size: 1.1rem;
`;

export const CustomInput = styled(Input)`
    font-size: 1.25rem;
    background-color: ${(props) => props.theme.primaryBackground};
    color: ${(props) => props.theme.primaryFont};

    &::placeholder {
        color: ${(props) => props.theme.secondaryFont};
    }
`;

export const CustomTextArea = styled(TextArea)`
    background: transparent;
    font-size: 1.25rem;
    color: ${(props) => props.theme.primaryFont};

    &::placeholder {
        color: ${(props) => props.theme.secondaryFont};
    }
`;

export const CustomRangePicker = styled(DatePicker.RangePicker)`
    background: transparent;
    width: 50%; 

    input {
        color: ${(props) => props.theme.primaryFont} !important;
        font-size: 1.25rem !important;

        &::placeholder{
            color: ${(props) => props.theme.secondaryFont} !important;
        }
    }

    svg{
        color: ${(props) => props.theme.primaryFont} !important;
    }
`;

export const CustomDatePicker = styled(DatePicker)`
    background: transparent;
    width: 50%;

    input {
        color: ${(props) => props.theme.primaryFont} !important;
        font-size: 1.25rem !important;

        &::placeholder{
            color: ${(props) => props.theme.secondaryFont} !important;
        }
    }

    svg{
        color: ${(props) => props.theme.primaryFont} !important;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid ${(props) => props.theme.secondaryFont};
    padding-top: 1.25rem;
`;

export const ActionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const CustomButton = styled.button`
    padding: 0.4rem;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 0.25rem;
    cursor: pointer;
    background-color: ${(props) => props.theme.secondaryFont};
    border: none;
    margin: 0 0.25rem;
    color: ${(props) => props.theme.primaryFont};

    display:flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;

    svg{
        margin-right: 0.25rem;
        font-size: 1rem;
    }

    &.submit {
        background-color: #2e89ff;
    }
`;
