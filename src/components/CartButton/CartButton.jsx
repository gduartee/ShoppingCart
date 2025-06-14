import React from "react";
import './CartButton.css';
import { IoCartOutline } from "react-icons/io5";

function CartButton() {
    return (
        <button type="button" className="cart_button">
            <IoCartOutline />
            <span className="cart_status">1</span>
        </button>
    );
}

export default CartButton;