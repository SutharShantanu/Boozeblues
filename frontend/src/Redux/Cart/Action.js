import axios from "axios";
import {
    ADD_TO_CART,
    GET_ITEMS_FROM_CART,
    REMOVE_FROM_CART,
} from "./ActionType";

const cartAdd = (payload) => {
    return { type: ADD_TO_CART, payload };
};

const cartGet = (payload) => {
    return { type: GET_ITEMS_FROM_CART, payload };
};

const cartRemove = (payload) => {
    return { type: REMOVE_FROM_CART, payload };
};

export const getCart = () => (dispatch) => {
    axios
        .get(`http://localhost:4500/cart`, {
            headers: {
                token: localStorage.getItem("token"),
            },
        })
        .then((res) => {
            dispatch(cartGet(res.data));
        })
        .catch((error) => {
            console.log(error);
        });
};

export const addCart = (product) => (dispatch) => {
    // console.log(product);
    // console.log(dispatch);
    axios
        .post(`http://localhost:4500/cart/add`, product, {
            headers: {
                token: localStorage.getItem("token"),
            },
        })
        .then((res) => {
            dispatch(cartAdd(res.data));
        })
        .catch((error) => {
            console.log(error);
        });
};

export const removeCart = (_id) => (dispatch) => {
    console.log(_id);
    axios
        .delete(`http://localhost:4500/cart/delete/${_id}`, {
            headers: {
                token: localStorage.getItem("token"),
            },
        })
        .then((res) => {
            dispatch(cartRemove(_id));
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        });
};
