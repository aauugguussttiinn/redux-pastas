import { createStore } from 'redux';
import pastasReducer from "./pastas/pastasReducer";

let store = createStore(pastasReducer);

export default store;