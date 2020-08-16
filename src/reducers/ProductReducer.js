import { GET_PRODUCTS, ADD_PRODUCT_TO_CART } from '../actions/ProductActions';

// initialize initial state
const initialState = {
    products: [],
    cartList: []
}

// sample product list
const productList = [
    {
        name: "Product 1"
    },
    {
        name: "Product 2"
    },
    {
        name: "Product 3"
    },
    {
        name: "Product 4"
    }
];

export default function products(state = initialState, action) {
    switch(action.type) {
        case GET_PRODUCTS:
            return { ...state, products: productList };
        case ADD_PRODUCT_TO_CART:
            return { ...state, cartList: [...state.cartList, action.payload] };
        default:
            return state;
    }
}