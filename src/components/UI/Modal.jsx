/**
 * Modal Component
 * Props:
 * isOpen: controls modal visibility
 * children: content inside modal
 * onClose: close function
 */

function Modal({ isOpen, children, onClose }) {
  if (!isOpen) return null;

  return (
    <div>
      {children}
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default Modal;