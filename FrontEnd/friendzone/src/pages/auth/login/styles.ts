import { Button, Form, Input } from "antd";
import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.secondaryBackground};
`

export const Wrapper = styled.div`
    width: 70%;
    background-color: transparent;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Banner = styled.div`
    width: 60%;
    padding: 1rem;
`

export const Logo = styled.div`
    width: 45%;
    img{
        width: 100%;
    }
`

export const Welcome = styled.div`
    font-size: 1.5rem;
`

export const FormWrapper = styled.div`
    width: 40%;
    padding: 1rem;
`

export const FormCustom = styled(Form)`
    background: ${props => props.theme.primaryBackground};
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1);
    border-radius: 0.5rem;
`

export const FormItem = styled(Form.Item)`
    margin-bottom: 2.5rem;
`

export const InputCustom = styled(Input)`
    font-size: 1.25rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
`

export const PasswordCustom = styled(Input.Password)`
    font-size: 1.25rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
`

export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const LoginButton = styled.button`
    width: 100%;
    font-size: 1.25rem;
    padding: 0.75rem;
    border-radius: 0.5rem;
    border: none;
    background: ${props => props.theme.primaryColor};
    color: white;
    cursor: pointer;
    font-weight: bold;
`
export const Forgot = styled.a`
    margin:0;
    margin-top: 1rem;
    font-size: 1rem;
`

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background: ${props => props.theme.secondaryFont};
    margin: 1rem 0;
`

export const RegisterButton = styled.button`
    font-size: 1.25rem;
    padding: 0.75rem;
    border-radius: 0.5rem;
    border: none;
    background: #36a420;
    color: white;
    cursor: pointer;
    font-weight: bold;
`


