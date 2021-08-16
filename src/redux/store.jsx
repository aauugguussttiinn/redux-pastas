import { createStore } from 'redux';
import pastasReducer from "./pastas/pastasReducer";
import riceReducer from "./rice/riceReducer";

let store = createStore(riceReducer);

export default store;