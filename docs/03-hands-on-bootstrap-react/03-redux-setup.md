# Hands-On: Part 3 - Setup Redux

#### Step 1: Install `redux` and `react-redux` module
```
$ npm install redux
$ npm install react-redux
```

#### Step 2: Create `actions`
Basically to make redux work, we need to setup three things:
- **actions:** The instruction messages which will be sent or "dispatched" from components to reducers to request change in state.
- **reducer:** The place where we "act" on the actions dispatched.
- **store:** Creating a store happens automatically, we just need to initialize it in two lines.

We will start with `actions`. 

Create a `productActions.js` file.

```Javascript
// src/actions/productActions.js

export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";

export const getProducts = () => {
    return {
        type: GET_PRODUCTS
    }
}

export const addProductToCart = (product) => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: product
    }
}
```

There are two actions we need right now. One is when we want to load all the products in our `ProductList.jsx` component i.e. `getProducts()` and second is when we add a single product in cart i.e. `addProductToCart()`.

#### Step 3: Create `reducer`
The place where we "act" on the actions dispatched. Technically, there should be only single reducer and single store. But for making the code more readable, we create multiple reducer functions and then combine them together before initializing the redux store.

```Javascript
// src/reducers/ProductReducer.js

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
```

Like mentioned above, there can be multiple reducers in an application. But to create the `redux store` where all the state of the application will be managed, we will need a single reducer. So we create `src/reducers/index.js` file where we can combine multiple reducers. Right now, we just have a single reducer to combine. This is how the file will look like.

```Javascript
// src/reducers/index.js

import { combineReducers } from "redux"
import products from './ProductReducer'

const rootReducer = combineReducers({
    productReducer: products
})

export default rootReducer
```

#### Step 4: Initialize `store`
Let's initialize the redux store. We will initialize our store and wrap our application inside the redux container component so that all the components of the application can access the state. Make the modification to `index.js` so that it starts to look like following.

```JSX
// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// new imports added
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

// initialize the redux store
const reduxStore = createStore(reducer)

ReactDOM.render(
  <Provider store={reduxStore}>
    {
    /* wrapped the app in provider and 
    passed in our initialized redux store */
    }
    
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

```

The redux setup is complete. There is one last thing we need to do before we are able to connect the components to our redux store via reducers.

[Go to Next Page: Hands-On Part 4 >>]()

