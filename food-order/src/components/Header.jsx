import { useContext } from 'react';

import imgLogo from '../assets/logo.jpg';
import Button from "./UI/Button";
import CartContext from "../Store/CartContext";
import UserProgressContext from '../Store/UserProgressContext';

export default function Header() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx= useContext(UserProgressContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);

    function handleShowCart() {
        userProgressCtx.showCart();
    }

    return <header id="main-header">
        <div id="title">
            <img src={imgLogo} alt="Delicious Food Logo" />
            <h1>Delicious Food</h1>
        </div>
        <nav>
            <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>
        </nav>
    </header>;
}