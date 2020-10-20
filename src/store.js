import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers/reducer";


const middleware = applyMiddleware(thunk);


const Store = createStore(reducer, middleware);

export default Store;
