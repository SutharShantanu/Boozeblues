import axios from "axios";
import {
    PRODUCTS_ERROR,
    PRODUCTS_SUCCESS,
    PRODUCTS_lOADING,
} from "./ActionType";

export const getProducts = (param) => async (dispatch) => {
    // console.log(param);
    try {
        dispatch({ type: PRODUCTS_lOADING });
        let res = await axios
            .get("http://localhost:4500/products", param)
            .then((res) => {
                dispatch({ type: PRODUCTS_SUCCESS, payload: res.data });
                // console.log(res.data);
                // return res.data;
            });
        // console.log(res);
    } catch (err) {
        dispatch({ type: PRODUCTS_ERROR });
    }
};
