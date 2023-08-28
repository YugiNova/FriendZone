import { Form, Input } from "antd";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`

export const Header = styled.div`
    width: 100%;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid black;
    margin-bottom: 1rem;
    h1{
        margin: 0;
        font-size: 2rem;
    }

    h3{
        margin: 0;
        font-weight: normal;
    }
`

export const CustomForm = styled(Form)`
    width: 100%;
`

export const NameWrapper = styled.div`
    width: 100%;
    display:grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
`

export const FormItem = styled(Form.Item)`

`

export const CustomInput = styled(Input)`
    font-size: 1.25rem;
    background: #e8f1fa;

    input{
        background:transparent;
    }
`

export const CustomPasswordInput = styled(Input.Password)`
    font-size: 1.25rem;
    background: #e8f1fa;

    input{
        background:transparent;
    }
`

export const SubmitButton = styled.button`
    font-size: 1.25rem;
    padding:0.5rem 2.5rem;
    border-radius: 0.5rem;
    border: none;
    background: rgb(54, 164, 32);
    color: white;
    font-weight: bold;
    cursor: pointer;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
`