import { createStore } from 'redux';
import pastasReducer from "./reducers/pasta.reducer";

let store = createStore(pastasReducer);

export default store;