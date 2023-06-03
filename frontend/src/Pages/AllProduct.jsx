import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/ProductReducer/Action";
import Styles from "./Style/AllProduct.module.css";
import ProductCard from "../Components/ProductCard";

import { useLocation, useSearchParams } from "react-router-dom";

import Sidebar from "../Components/Sidebar";

const AllProduct = () => {
    const alldata = useSelector((store) => store.ProductReducer.products);

    const { product } = alldata;

    const dispatch = useDispatch();
    const location = useLocation();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const params = {
            params: {
                category: searchParams.getAll("category"),
                quantity: searchParams.getAll("quantity"),
            },
        };
        dispatch(getProducts(params));
    }, [location.search]);
    console.log(product);
    return (
        <div className={Styles.main}>
            <div className={Styles.main_one}>
                <div className={Styles.one_one}>
                    <h1 className={Styles.left_h1}>Wine</h1>
                    <p className={Styles.left_p}>(7,434 Products)</p>
                </div>
                <div className={Styles.one_two}>
                    <p>Red Wine</p>
                    <p>White Wine</p>
                    <p>Sparkling Wine</p>
                    <p>Champagne</p>
                    <p>Desert and Fortified Wine</p>
                    <p>Brut</p>
                    <p>Rose & Blush Wine</p>
                    <p>Sangria</p>
                </div>
            </div>
            <div className={Styles.main_two}>
                <div className={Styles.two_one}>
                    <Sidebar />
                </div>
                <div className={Styles.two_two}>
                    {product?.map((ele) => (
                        <div key={ele.id}>
                            <ProductCard id={ele._id} {...ele} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProduct;
