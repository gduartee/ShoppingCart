import React, { useContext } from "react";
import './CartButton.css';
import { IoCartOutline } from "react-icons/io5";
import AppContext from "../../context/AppContext";

function CartButton() {
    const { cartItens, setIsCartVisible, isCartVisible } = useContext(AppContext);
    return (
        <button
            type="button"
            className="cart_button"
            onClick={() => setIsCartVisible(!isCartVisible)}
        >
            <IoCartOutline />
            {cartItens.length > 0 ? <span className="cart_status">{cartItens.length}</span> : ''}

        </button>
    );
}

export default CartButton;