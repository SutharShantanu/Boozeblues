import React from "react";
import { Link } from "react-router-dom";
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
    return (
        <div className={Styles.main}>
            <div className={Styles.left}>
                <Link to="/">Home</Link>
                <Link to="/products">All Products</Link>
                <Link to="/product/:id">Single Product</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/address">Address</Link>
                <Link to="/payment">Paymnt</Link>
                <Link to="/wishlist">Wishlist</Link>
            </div>
            <div className={Styles.right}>
                <InputGroup w={"25wv"}>
                    <Input type="search" placeholder="Search here anything" />
                    <InputRightElement>
                        <Button style={{ backgroundColor: "transparent" }}>
                            <SearchIcon />
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <IconButton
                    variant="outline"
                    colorScheme="gray"
                    icon={<CiHeart />}
                />
                <IconButton
                    variant="outline"
                    colorScheme="gray"
                    icon={<CiShoppingCart />}
                />
                <IconButton
                    variant="outline"
                    colorScheme="gray"
                    icon={<CiDeliveryTruck />}
                />
                <Button
                    rightIcon={<ArrowForwardIcon />}
                    colorScheme="gray"
                    variant="outline">
                    Login / Register
                </Button>
            </div>
        </div>
    );
};

export default Navbar;
