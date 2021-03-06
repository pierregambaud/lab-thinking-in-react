import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
    state = {
        products: this.props.products.data
    }

    render() {
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar />
                <ProductTable products={this.state.products} />
            </div>
        )
    }
}

export default FilterableProductTable;