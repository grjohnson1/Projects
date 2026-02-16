import { useContext } from 'react';

import Modal from './UI/Modal';
import CartContext from '../Store/CartContext';
import ChartItem from './ChartItem';
import Button from './UI/Button';
import { currencyFormatter } from '../util/formatting';
import UserProgressContext from '../Store/UserProgressContext';

export default function Cart() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce((totalPrice, item) => 
        totalPrice + item.quantity * item.price,
        0
    );

    function handleCloseCart() {
        userProgressCtx.hideCart();
    }

    return (
        <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map(item => <ChartItem 
                    key={item.id} 
                    name={item.name} 
                    quantity={item.quantity} 
                    price={item.price}
                    onIncrease={() => cartCtx.addItem(item)}
                    onDecrease={() => cartCtx.removeItem(item.id)}
                 />)}
            </ul>
            <p className="cart-total">Total: {currencyFormatter.format(cartTotal)}</p>
            <p className="modal-actions">
                <Button textOnly onClick={handleCloseCart}>Close</Button>
                <Button onClick={handleCloseCart}>Go to Checkout</Button>
            </p>
        </Modal>
    );
}