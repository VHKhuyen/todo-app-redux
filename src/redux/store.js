import { legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";

const composeWithEnhancer = composeWithDevTools();

export const store = legacy_createStore(reducer, composeWithEnhancer);
