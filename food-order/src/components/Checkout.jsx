import { useContext } from "react";

import Modal from "./UI/Modal";
import Input from "./UI/Input";
import Button from "./UI/Button";
import CartContext from "../Store/CartContext";
import UserProgressContext from "../Store/UserProgressContext";

import { currencyFormatter } from "../util/formatting";

export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce((totalPrice, item) => 
        totalPrice + item.quantity * item.price,
        0
    );

    function handleClose() {
        userProgressCtx.hideCheckout();
    }

    return <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
        <form>
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

            <Input label="Full Name" id="full-name" type="text" />
            <Input label="E-mail Address" id="email" type="email" />
            <Input label="Street Address" id="street" type="text" />
            <div className="control-row">
                <Input label="Postal Code" id="postal-code" type="text" />
                <Input label="City" id="city" type="text" />
            </div>

            <p className="modal-actions">
                <Button type="button" textOnly onClick={handleClose}>Close</Button>
                <Button type="submit">Submit Order</Button>
            </p>

        </form>
    </Modal>
}