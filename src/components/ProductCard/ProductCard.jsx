import React, { useContext } from "react";
import propTypes from 'prop-types';
import { BsCartPlus } from "react-icons/bs";

import './ProductCard.css';
import AppContext from "../../context/AppContext";

function ProductCard({ data }) {
    const { product_title, product_price, product_photo } = data;
    const { cartItens, setCartItens } = useContext(AppContext);

    const handleAddCart = () => {
        setCartItens([...cartItens, data]);
    }

    return (
        <section className="product_card">

            <img
                src={product_photo} alt="product"
                className="card_image" />

            <div className="card_infos">
                <h2 className="card_price">{product_price}</h2>
                <h2 className="card_title">{product_title}</h2>
            </div>

            <button
                type="button"
                className="button_add-cart"
                onClick={handleAddCart}
            >
                <BsCartPlus />
            </button>

        </section>
    );
}

export default ProductCard;

ProductCard.propTypes = {
    data: propTypes.shape({}),
}.isRequired;