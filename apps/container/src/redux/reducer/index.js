import { combineReducers } from 'redux'
import {product, products} from './products'

const root = combineReducers({
    product,
    products
})
export default root