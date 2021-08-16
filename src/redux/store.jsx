import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import pastasReducer from "./pastas/pastasReducer";
import riceReducer from "./rice/riceReducer";


const rootReducer = combineReducers({
  pastas: pastasReducer,
  rice: riceReducer
})

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store;