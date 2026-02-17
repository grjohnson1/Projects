import { useContext } from "react";

import Modal from "./UI/Modal";
import Input from "./UI/Input";
import Button from "./UI/Button";
import Error from "./Error";
import useHttp from "../Hooks/useHttp";
import CartContext from "../Store/CartContext";
import UserProgressContext from "../Store/UserProgressContext";

import { currencyFormatter } from "../util/formatting";

const requestConfig = {
    method: 'POST',
    headers: {  'Content-Type': 'application/json' }
};

export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const { 
        data, 
        isLoading: isSending, 
        error, 
        sendRequest,
        clearData
    } = useHttp('http://localhost:3000/orders', requestConfig);

    const cartTotal = cartCtx.items.reduce((totalPrice, item) => 
        totalPrice + item.quantity * item.price,
        0
    );

    function handleClose() {
        userProgressCtx.hideCheckout();
    }

    function handleFinish() {
        userProgressCtx.hideCheckout();
        cartCtx.clearCart();
        clearData();
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formData =new FormData(event.target);
        const customerData = Object.fromEntries(formData.entries());

        sendRequest(
            JSON.stringify({
                order: {
                    items: cartCtx.items,
                    customer: customerData,
                }
            })
        );
    }

    let actions = (
        <>
            <Button type="button" textOnly onClick={handleClose}>Close</Button>
            <Button type="submit">Submit Order</Button>
        </>
    );
    
    if (isSending) {
        actions = <span>Sending order data...</span>;
    }

    if (data && !error) {
        return <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleFinish}>
            <h2>Success!</h2>
            <p>Your order was submitted successfuly.</p>
            <p>You will receive an email confirmation shortly.</p>
            <p className="modal-actions">
                <Button onClick={handleFinish}>Okay</Button>
            </p>
        </Modal>;
    }

    return <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

            <Input label="Full Name" id="name" type="text" />
            <Input label="E-mail Address" id="email" type="email" />
            <Input label="Street Address" id="street" type="text" />
            <div className="control-row">
                <Input label="Postal Code" id="postal-code" type="text" />
                <Input label="City" id="city" type="text" />
            </div>

            {error && <Error title="Failed to submit order" message={error} />}

            <p className="modal-actions">{actions}</p>

        </form>
    </Modal>
}