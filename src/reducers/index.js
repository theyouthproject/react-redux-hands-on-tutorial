import { combineReducers } from "redux"
import products from './ProductReducer'

const rootReducer = combineReducers({
    productReducer: products
})

export default rootReducer