import {
     legacy_createStore as createStore,
     combineReducers, 
     applyMiddleware, 
     compose,
} from "redux";
import thunk from "redux-thunk";

const reducer = combineReducers({}); /* restuarant reducer, menu reducer, cart reducer etc...store into combinrreducer*/

let initialState = {};  /* it declares an intialstate object of our redux store and we can initialize any default value need for the application*/

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose; /* to check the redux devtools are available or not in the browser if it is not then it goes to compose(|| compose) */
const middleware = [thunk];
const store = createStore(
    reducer, 
    initialState,
    composeEnhancers(applyMiddleware(...middleware)) /* it is all about the action */
    );

export default store;


