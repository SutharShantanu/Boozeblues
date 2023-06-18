import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Styles from "./Styles/Navbar.module.css";

import {
    Button,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { CiHeart, CiShoppingCart, CiDeliveryTruck } from "react-icons/ci";

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchQuery}`);
    setSearchQuery("");
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

    return (
        <div className={Styles.main}>
            <div className={Styles.left}>
                <Link to="/">Home</Link>
                <Link to="/products">All Products</Link>
                <Link to="/product/:id">Single Product</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/address">Address</Link>
                <Link to="/payment">Payment</Link>
            </div>
            <div className={Styles.right}>
                <InputGroup w={"25wv"}>
                    <Input
                        type="search"
                        placeholder="Search here anything"
                        _focusVisible={{
                            outline: "none",
                            backgroundColor: "#EDF2F7",
                        }}
                        value={searchQuery}
                        onChange={handleChange}
                    />
                    <InputRightElement>
                        <Button
                            style={{ backgroundColor: "transparent" }}
                            onClick={handleSearch}>
                            <SearchIcon />
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <Link to="/wishlist">
                    <IconButton
                        variant="outline"
                        colorScheme="gray"
                        icon={<CiHeart />}
                        onClick={() => {}}
                    />
                </Link>
                <Link to="/cart">
                    <IconButton
                        variant="outline"
                        colorScheme="gray"
                        icon={<CiShoppingCart />}
                    />
                </Link>
                <Link to="/order">
                    <IconButton
                        variant="outline"
                        colorScheme="gray"
                        icon={<CiDeliveryTruck />}
                    />
                </Link>
                <Link to="/signup">
                    <Button
                        rightIcon={<ArrowForwardIcon />}
                        colorScheme="gray"
                        variant="outline">
                        Login / Register
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
