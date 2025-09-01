import { useImperativeHandle, useRef } from "react";
import { createPortal } from 'react-dom';
//import {forwardRef} from 'react';
/*
 Older versions (befroe React version 19) of react will require a wrapper function to ensure that the ref can be forwarded to the component.
 replase the export default with following:

 const ResultModal = forwardRef(function ResultModal({result, targetTime}, ref) {
    ...original code will go here
 });

 export default ResultModal
*/

export default function ResultModal({ref, targetTime, remainingTime, onReset}) {
    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    // keeps the logic alongside the component allowing user to alter the use of dialog tag to a div and know they should alter the handling
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        };
    });

    return createPortal(
        <dialog ref={dialog} className="result-modal">
            {userLost && <h2>You lost</h2>}
            {!userLost && <h2>You Score: {score}</h2>}
            <p>The targetTime was <strong>{targetTime} seconds.</strong></p>
        const formattedRemainingTime = remainingTime / 1000;
            <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
            {/* onSubmit will not handle Esc (Escape) key for that you should use onClose */}
            <form method="dialog" onClose={onReset}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    );
}