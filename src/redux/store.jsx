import { createStore } from 'redux';
import pastasReducer from "./pastasReducer";

let store = createStore(pastasReducer);

export default store;