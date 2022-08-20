import { combineReducers ,createStore, aapplyMiddleware, applyMiddleware} from "redux"
import productReducer from "./reducers/productReducer"
import thunk from "redux-thunk"
const configureStore = () =>{
    return createStore(combineReducers({
        productsDetails:productReducer
    }), applyMiddleware(thunk))
}

export default configureStore