import { Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Styles from "./Styles/Sorting.module.css";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useSearchParams } from "react-router-dom";

const Sorting = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialState = searchParams.get("order");
    const [order, setOrder] = useState(initialState || "");

    const handleSort = (e) => {
        setOrder(e.target.value);
    };

    useEffect(() => {
        const params = {};
        order && (params.order = order);
        setSearchParams(params);
    }, [order]);

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
