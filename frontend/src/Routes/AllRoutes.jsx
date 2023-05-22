import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import AllProducts from "../Pages/AllProduct";
import {SingleProduct} from "../Pages/SingleProduct";
import Cart from "../Pages/Cart";
import Address from "../Pages/Address";
import Payment from "../Pages/Payment";
import Order from "../Pages/Order";
import Wishlist from "../Pages/Wishlist";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Search from "../Pages/Search";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/address" element={<Address />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/order" element={<Order />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/search" element={<Search />} />
        </Routes>
    );
};

export default AllRoutes;
