import { useImperativeHandle, useRef } from "react"
//import {forwardRef} from 'react';
/*
 Older versions (befroe React version 19) of react will require a wrapper function to ensure that the ref can be forwarded to the component.
 replase the export default with following:

 const ResultModal = forwardRef(function ResultModal({result, targetTime}, ref) {
    ...original code will go here
 });

 export default ResultModal
*/

export default function ResultModal({ref, result, targetTime}) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        };
    });

    return <dialog ref={dialog} className="result-modal">
        <h2>You {result}</h2>
        <p>The targetTime was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with <strong>X seconds left.</strong></p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
}