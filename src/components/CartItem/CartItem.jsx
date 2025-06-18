import React from "react";
import './CartItem.css';
import { BsCartXFill } from "react-icons/bs";
import propTypes from 'prop-types';

function CartItem({ data }) {

    const { product_title, product_price, product_photo } = data;

    return (
        <section className="cart-item">
            <img
                src={product_photo}
                alt="imagem do produto"
                className="cart-item-image"
            />

            <div className="cart-item-content">
                <h3 className="cart-item-title">{product_title}</h3> <h3 className="cart-item-price">{product_price}</h3>

                <button
                    type="button"
                    className="button-remove-item"
                >
                    <BsCartXFill />
                </button>
            </div>
        </section>
    );
}

export default CartItem;

CartItem.propTypes = {
    data: propTypes.object
}.isRequired;