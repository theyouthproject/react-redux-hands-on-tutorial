import React from 'react';
import { connect } from 'react-redux';
import { getProducts, addProductToCart } from "../actions/ProductActions";

class ProductList extends React.Component {

    componentDidMount() {
        // dispatch GET_PRODUCTS action to reducer
        this.props.dispatchGetProducts();
    }

    render() {
        return (
            <div className="product-list-container">
                <h2>Product List</h2>
                <div className="product-list">
                    {this.props.products.map((product, index) => {
                        return (
                            <div className="product-item" key={index}>
                                <div className="product-name">
                                    {product.name}
                                </div>
                                <div className="add-to-cart-btn" onClick={() => this.props.dispatchAddProductToCart(product)}>
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

const mapStateToProps = globalState => {
    return {
        products: globalState.productReducer.products
    }
}

const mapDispatchToProps = (dispatch) => ({
    dispatchGetProducts: () => {
        dispatch(getProducts());
    },
    dispatchAddProductToCart: (product) => {
        dispatch(addProductToCart(product));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);