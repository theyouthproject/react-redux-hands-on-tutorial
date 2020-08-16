# Hands-On: Part 2 - Create Components

#### Step 1: Create `ProductList.jsx`
```JSX
// components/ProductList.jsx
import React from 'react';

class ProductList extends React.Component {    
    state = {
        products: [
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
        ]
    };

    render() {
        return (
            <div className="product-list-container">
                <h2>Product List</h2>
                <div className="product-list">
                    {this.state.products.map((product, index) => {
                        return (
                            <div className="product-item" key={index}>
                                <div className="product-name">
                                    {product.name}
                                </div>
                                <div className="add-to-cart-btn">
                                    +
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default ProductList;
```

#### Step 2: Create `CartList.jsx`
```JSX
// components/CartList.jsx
import React from 'react';

class CartList extends React.Component {
    
    state = {
        cartList: [
            {
                name: "Product 6"
            }
        ]
    };

    render() {
        return (
            <div className="cart-list-container">
                <h2>Cart List</h2>
                <div className="cart-list">
                    {this.state.cartList.map((product, index) => {
                        return (
                            <div className="cart-item" key={index}>{product.name}</div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default CartList;
```

### Explanation
Currently in the components we can see the state is maintained inside the components only. In this case, if we don't want to use redux, we will put the API calls inside the components. But for start, we will just target to move the state from components to redux store.

[Go to Next Page: Hands-On Part 3 >>]()