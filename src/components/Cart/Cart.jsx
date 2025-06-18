import React, { useContext } from "react";
import './Cart.css';
import CartItem from "../CartItem/CartItem";
import AppContext from "../../context/AppContext";

function Cart() {
    const { cartItens } = useContext(AppContext);
    
    const totalPrice = cartItens.reduce((acc, item) => {
        return parseFloat(item.product_price.replace("$", "")) + acc;
    }, 0);

    return (
        <section className="cart">
            <div className="cart-itens">
                {cartItens.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />)}
            </div>

            <div className="cart-resume">R$ {totalPrice}</div>
        </section>
    );
}

export default Cart;