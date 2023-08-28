import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    background: ${props => props.theme.primaryBackground};
    padding: 0.5rem;
    width: 100%;
    margin: 1rem 0;
    border-radius: 0.5rem;
    display: flex;
    justify-content:center;
    align-items: center;
`

export const Wrapper = styled(motion.div)`
    display: flex;
    justify-content:center;
    align-items: center;
    height: 2rem;
    width: 10rem;
    margin-bottom: 0.5rem;
`

export const Circle = styled(motion.div)`
    padding: 0.3rem;
    background: red;
    border-radius: 50%;
    margin: 0 0.25rem;
`