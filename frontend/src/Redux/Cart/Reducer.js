import {
    ADD_TO_CART,
    GET_ITEMS_FROM_CART,
    IS_ERROR,
    IS_LOADING,
    REMOVE_FROM_CART,
} from "./ActionType";

const initialState = {
    isLoading: false,
    cart: [],
    isError: false,
};

export const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case IS_LOADING:
            return { ...state, isLoading: true };
        case GET_ITEMS_FROM_CART:
            return {
                ...state,
                isLoading: false,
                cart: payload,
                isError: false,
            };
        case ADD_TO_CART:
            return { ...state, cart: payload };
        case REMOVE_FROM_CART:
            const updatedCart = state.cart.filter((ele) => ele.id !== payload);
            return { ...state, cart: updatedCart };
        case IS_ERROR:
            return { ...state, isError: true };
        default:
            return state;
    }
};
