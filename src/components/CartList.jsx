import React from 'react';
import { connect } from 'react-redux';


class CartList extends React.Component {

    render() {
        return (
            <div className="cart-list-container">
                <h2>Cart List</h2>
                <div className="cart-list">
                    {this.props.cartList.map((product, index) => {
                        return (
                            <div className="cart-item" key={index}>{product.name}</div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = globalState => {
    return {
        cartList: globalState.productReducer.cartList
    }
}

export default connect(mapStateToProps)(CartList);