// Search.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import axios from "axios";
import Styles from "./Style/Search.module.css";

const Search = () => {
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get("query");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:4500/products/search/${searchQuery}`
                );
                setSearchResults(res.data);
            } catch (error) {
                console.error(error);
            }
        };

        if (searchQuery) {
            fetchSearchResults();
        }
    }, [searchQuery]);

    return (
        <div className={Styles.main}>
            <h1>Searched Products</h1>
            <div className={Styles.main_one}>
                {searchResults.length > 0 ? (
                    <ul>
                        {searchResults.map((ele) => (
                            <ProductCard id={ele.id} {...ele} />
                        ))}
                    </ul>
                ) : (
                    <h1>No matching products found.</h1>
                )}
            </div>
        </div>
    );
};

export default Search;
