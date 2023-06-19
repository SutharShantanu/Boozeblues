import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Styles from "./Style/Cart.module.css";
import { getCart } from "../Redux/Cart/Action";
import CartContent from "../Components/CartContent";

const Cart = () => {
    const dispatch = useDispatch();
    const cartData = useSelector((store) => store.WishlistReducer.wishlist);
    console.log(cartData);
    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);
    return (
        <div className={Styles.main}>
            <h1>Cart</h1>
            <div className={Styles.main_one}>
                {cartData.length > 0 ? (
                    cartData.map((ele) => (
                        <div key={ele.id}>
                            <CartContent
                                key={ele._id}
                                id={ele.prodId}
                                {...ele}
                            />
                        </div>
                    ))
                ) : (
                    <p>No items in Cart</p>
                )}
            </div>
        </div>
    );
};

export default Cart;
