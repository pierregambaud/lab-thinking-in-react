import React, { Component } from "react";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
    state = {
        products: this.props.products
    }

    render() {
        return (
            <div className="product-table">
                <header>
                    <span>Name</span>
                    <span>Price</span>
                </header>
                <main>
                    {this.state.products.map(product => <ProductRow category={product.category} name={product.name} price={product.price} stocked={product.stocked} />
                    )}
                </main>
            </div>
        )
    }
}

export default ProductTable;