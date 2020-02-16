import React, { Component } from "react";

class ProductRow extends Component {
    state = {
        category: this.props.category,
        name: this.props.name,
        price: this.props.price,
        stocked: this.props.stocked
    }

    render() {
        const attrs = {}
        if (!this.state.stocked) {
            attrs.style = {color: 'red'};
        }

        return (
            <div>
                <span {...attrs}>{this.state.name}</span>
                <span>{this.state.price}</span>
            </div>
        )
    }
}

export default ProductRow;