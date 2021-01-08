import { useEffect } from 'react';
import PropTypes from 'prop-types';

function Modal({ onCloseModal, children }) {
  useEffect(() => {
    window.addEventListener('keydown', pressEscBtn);

    return () => {
      window.removeEventListener('keydown', pressEscBtn);

      onCloseModal();
    };
  });

  const pressEscBtn = e => {
    console.log(e);
    if (e.code === 'Escape') {
      onCloseModal();
    }
  };

  return (
    <div className="Overlay" onClick={onCloseModal}>
      <div className="Modal">{children}</div>
    </div>
  );
}

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
