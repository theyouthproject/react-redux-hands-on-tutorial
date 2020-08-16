import React from 'react';

class CartList extends React.Component {
    
    state = {
        cartList: [
        ]
    };

    render() {
        return (
            <div className="cart-list-container">
                <h2>Cart List</h2>
                <div className="cart-list">
                    {this.state.cartList.map((product, index) => {
                        return (
                            <div key={index}>{product.name}</div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default CartList;