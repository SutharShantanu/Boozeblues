import axios from "axios";
import {
    ADD_TO_WISHLIST,
    GET_ITEMS_FROM_WISHLIST,
    REMOVE_FROM_WISHLIST,
} from "./ActionType";

const wishlistAdd = (payload) => {
    return { type: ADD_TO_WISHLIST, payload };
};

const wishlistGet = (payload) => {
    return { type: GET_ITEMS_FROM_WISHLIST, payload };
};

const wishlistRemove = (payload) => {
    return { type: REMOVE_FROM_WISHLIST, payload };
};

export const getWishlist = () => (dispatch) => {
    axios
        .get(`http://localhost:4500/wishlist`, {
            headers: {
                token: localStorage.getItem("token"),
            },
        })
        .then((res) => {
            dispatch(wishlistGet(res.data));
        })
        .catch((error) => {
            console.log(error);
        });
};

export const addWishlist = (product) => (dispatch) => {
    console.log(product);
    axios
        .post(`http://localhost:4500/wishlist/add`, product, {
            headers: {
                token: localStorage.getItem("token"),
            },
        })
        .then((res) => {
            dispatch(wishlistAdd(res.data));
        })
        .catch((error) => {
            console.log(error);
        });
};

export const removeWishlist = (id) => (dispatch) => {
    console.log(id);
    axios
        .delete(`http://localhost:4500/wishlist/delete/${id}`, {
            headers: {
                token: localStorage.getItem("token"),
            },
        })
        .then((res) => {
            dispatch(wishlistRemove(id));
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        });
};
