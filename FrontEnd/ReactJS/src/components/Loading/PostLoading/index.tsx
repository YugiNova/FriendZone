import { Circle, Container, Wrapper } from "./styles";
import { useSelector } from "react-redux";
import { getTheme } from "../../../redux/selectors";

const PostLoading = () => {
    const theme = useSelector(getTheme);

    const container = {
        initial: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
        animate: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        initial: { y: "0%" },
        animate: {
            y:"100%",
        },
    };

    const transitions = {
        ease: "linear",
        duration: 0.5,
        repeat: Infinity,
    };

    return (
        <Container theme={theme}>
            <Wrapper variants={container} initial="initial" animate="animate">
                <Circle
                    variants={item}
                    transition={{ repeatType: "reverse", ...transitions }}
                ></Circle>
                <Circle
                    variants={item}
                    transition={{ repeatType: "reverse", ...transitions }}
                ></Circle>
                <Circle
                    variants={item}
                    transition={{ repeatType: "reverse", ...transitions }}
                ></Circle>
            </Wrapper>
        </Container>
    );
};

export default PostLoading;
