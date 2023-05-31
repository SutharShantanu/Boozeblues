import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Styles from "./Style/Wishlist.module.css";
import { getWishlist } from "../Redux/Wishlist/Action";
import WishlistCard from "../Components/WishlistCard";

const Wishlist = () => {
    const dispatch = useDispatch();
    const wishlistData = useSelector((store) => store.WishlistReducer.wishlist);
    console.log(wishlistData);
    useEffect(() => {
        dispatch(getWishlist());
    }, [dispatch]);

    return (
        <div className={Styles.main}>
            <h1>My Wishlist</h1>
            <div className={Styles.main_one}>
                {wishlistData.length > 0 ? (
                    wishlistData.map((ele) => (
                        <div key={ele.id}>
                            <WishlistCard
                                key={ele._id}
                                id={ele.prodId}
                                {...ele}
                            />
                        </div>
                    ))
                ) : (
                    <p>No items in wishlist</p>
                )}
            </div>
        </div>
    );
};

export default Wishlist;
