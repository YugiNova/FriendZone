import { MdOutlineSearch } from "react-icons/md";
import { Container,CustomSearch } from "./styles";
import { useSelector } from "react-redux";
import { getTheme } from "../../../../redux/selectors";
import { Select, SelectProps } from "antd";
import { useState } from "react";

const SearchBox: React.FC = () => {
    const theme = useSelector(getTheme)

    return (
        <Container>
            <CustomSearch placeholder="Find other friends here..." theme={theme} prefix={<MdOutlineSearch/>}/>
        </Container>
    );
};

export default SearchBox;
