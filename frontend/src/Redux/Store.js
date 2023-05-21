import { applyMiddleware, legacy_createStore, combineReducers } from "redux";
import { Reducer as ProductReducer } from "./ProductReducer/Reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    ProductReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
