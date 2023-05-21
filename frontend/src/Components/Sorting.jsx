import { Select, Text } from "@chakra-ui/react";
import React from "react";
import Styles from "./Styles/Sorting.module.css";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Sorting = () => {
    const handleSort = () => {};
    return (
        <div className={Styles.main}>
            <p className={Styles.main_p}>Sort By </p>
            <Select
                maxWidth={"70%"}
                _focusVisible={{ outline: "none" }}
                icon={<ChevronDownIcon />}
                onChange={handleSort}>
                <option value="">Relevance</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to low</option>
            </Select>
        </div>
    );
};

export default Sorting;
