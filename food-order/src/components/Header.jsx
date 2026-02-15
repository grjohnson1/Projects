import {useContext } from 'react';

import imgLogo from '../assets/logo.jpg';
import Button from "./UI/Button";
import CartContext from "../Store/CartContext";

export default function Header() {
    const cartContext = useContext(CartContext);
    const totalCartItems = cartContext.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);

    return <header id="main-header">
        <div id="title">
            <img src={imgLogo} alt="Delicious Food Logo" />
            <h1>Delicious Food</h1>
        </div>
        <nav>
            <Button textOnly >Cart ({totalCartItems})</Button>
        </nav>
    </header>;
}