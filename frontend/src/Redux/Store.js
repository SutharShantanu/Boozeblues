import { applyMiddleware, legacy_createStore, combineReducers } from "redux";
import { Reducer as ProductReducer } from "./ProductReducer/Reducer";
import { Reducer as UserReducer } from "./UserReducer/Reducer";
import { Reducer as SingleProductReducer } from "./SingleProduct/Reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    ProductReducer,
    UserReducer,
    SingleProductReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
