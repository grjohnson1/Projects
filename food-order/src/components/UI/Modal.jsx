import { createPortal, useRef } from "react";

export default function Modal({ children, open, className = "", onClose }) {
    const dialog = useRef();

    useEffect(() => {
        if (open) {
            dialog.current.showModal();
        } else {
            document.body.style.overflow = "auto";
        }
    }, [open]);

    return createPortal(
        <dialog className={`modal ${className}`} onClick={onClose}>
            {children}
        </dialog>,
        document.getElementById("modal")
    );
}