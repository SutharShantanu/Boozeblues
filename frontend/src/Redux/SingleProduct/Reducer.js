import {
    SINGLE_PRODUCTS_ERROR,
    SINGLE_PRODUCTS_LOADING,
    SINGLE_PRODUCTS_SUCCESS,
} from "./ActionType";

const initialState = {
    isLoading: false,
    isError: false,
    singleProduct: [],
};

export const Reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SINGLE_PRODUCTS_LOADING:
            return { ...state, isLoading: true };

        case SINGLE_PRODUCTS_SUCCESS:
            return { ...state, isLoading: false, singleProduct: payload };

        case SINGLE_PRODUCTS_ERROR:
            return { ...state, isLoading: false, isError: true };

        default:
            return state;
    }
};
