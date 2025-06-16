import React from "react";
import propTypes from 'prop-types';
import { BsCartPlus } from "react-icons/bs";

import './ProductCard.css';

function ProductCard({ data }) {
    return (
        <section className="product_card">

            <img
                src="https://m.media-amazon.com/images/I/51fYXSnSu9L._AC_UY654_FMwebp_QL65_.jpg" alt="product"
                className="card_image" />

            <div className="card_infos">
                <h2 className="card_price">R$ 200.20</h2>
                <h2 className="card_title">titulo do produto</h2>
            </div>

            <button
                type="button" className="button_add-cart">
                <BsCartPlus />
            </button>

        </section>
    );
}

export default ProductCard;

ProductCard.propTypes = {
    data: propTypes.shape({})
}.isRequired;