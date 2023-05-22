import axios from "axios";
import {
    SINGLE_PRODUCTS_LOADING,
    SINGLE_PRODUCTS_SUCCESS,
    SINGLE_PRODUCTS_ERROR,
} from "./ActionType";

export const getSingleProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: SINGLE_PRODUCTS_LOADING });
        const res = await axios.get(`http://localhost:4500/products/${id}`);
        dispatch({ type: SINGLE_PRODUCTS_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch({ type: SINGLE_PRODUCTS_ERROR });
    }
};
