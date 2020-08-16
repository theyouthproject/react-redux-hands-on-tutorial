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
                            <div key={index}>{product.name}</div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default ProductList;