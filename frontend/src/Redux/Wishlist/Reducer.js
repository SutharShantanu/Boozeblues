import {
    ADD_TO_WISHLIST,
    GET_ITEMS_FROM_WISHLIST,
    IS_ERROR,
    IS_LOADING,
    REMOVE_FROM_WISHLIST,
} from "./ActionType";

const initialState = {
    isLoading: false,
    wishlist: [],
    isError: false,
};

export const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case IS_LOADING:
            return { ...state, isLoading: true };
        case GET_ITEMS_FROM_WISHLIST:
            return {
                ...state,
                isLoading: false,
                wishlist: payload,
                isError: false,
            };
        case ADD_TO_WISHLIST:
            return { ...state, wishlist: payload };
        case REMOVE_FROM_WISHLIST:
            const updatedWishlist = state.wishlist.filter(
                (ele) => ele.id !== payload
            );
            return { ...state, wishlist: updatedWishlist };
        case IS_ERROR:
            return { ...state, isError: true };
        default:
            return state;
    }
};
