import {
    PRODUCTS_ERROR,
    PRODUCTS_SUCCESS,
    PRODUCTS_lOADING,
} from "./ActionType";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
};

export const Reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case PRODUCTS_lOADING:
            return { ...state, isLoading: true };

        case PRODUCTS_SUCCESS:
            return { ...state, isLoading: false, products: payload };

        case PRODUCTS_ERROR:
            return { ...state, isLoading: false, isError: true };

        default:
            return state;
    }
};
