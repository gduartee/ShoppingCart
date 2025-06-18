import React from "react";
import './Cart.css';
import CartItem from "../CartItem/CartItem";

function Cart() {
    return (
        <section className="cart">
            <div className="cart-itens">
                <CartItem data={{product_photo: '', product_title: 'Titulo', product_price: '100'}}/>
            </div>

            <div className="cart-resume">resumo do carrinho</div>
        </section>
    );
}

export default Cart;