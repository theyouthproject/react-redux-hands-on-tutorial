export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";

export const getProducts = () => {
    return {
        type: GET_PRODUCTS
    }
}

export const addProductToCart = (products) => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: products
    }
}