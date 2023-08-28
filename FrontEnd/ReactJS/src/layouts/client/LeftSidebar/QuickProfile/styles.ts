import styled from "styled-components";

interface Props {
    src?: string;
}

export const Container = styled.div`
    width: 100%;
    background: ${(props) => props.theme.primaryBackground};
    border-radius: 0.5rem;
    margin-top: 1rem;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    box-shadow: ${(props) => props.theme.boxshadow};
`;

export const Wall = styled.div`
    background: ${(props) => props.theme.primaryColor};
    width: 100%;
    height: 6rem;
    position: relative;
`;

export const AvatarWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AvatarCustom = styled.img<Props>`
    background-image: url(${props => props.src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    background-size: cover;
    border: 0.4rem solid ${(props) => props.theme.primaryBackground};
`;

export const InfoWrapper = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Name = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme.primaryFont};
`;

export const Nickname = styled.div`
    color: ${(props) => props.theme.secondaryFont};
    font-size: 0.9rem;
`;

export const Slogan = styled.div`
    padding: 1rem;
    color: ${(props) => props.theme.primaryFont};
    font-size: 0.8rem;
`;

export const InfoItem = styled.div`
    color: ${(props) => props.theme.primaryFont};
    border-top: 1px solid ${(props) => props.theme.secondaryFont};
    width: 100%;
    padding: 1.25rem 1rem;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 600;
`;
