import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Search = () => {
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get("query");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:4500/products/search?query=${searchQuery}`
                );
                setSearchResults(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        if (searchQuery) {
            fetchSearchResults();
        }
    }, [searchQuery]);

    return (
        <div>
            {searchResults.length > 0 ? (
                <ul>
                    {searchResults.map((result) => (
                        <li key={result.id}>{result.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No matching products found.</p>
            )}
        </div>
    );
};

export default Search;
