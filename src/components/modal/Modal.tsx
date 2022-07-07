import React from 'react';
import closeIcon from '@/assets/images/close.png';

type Props = {
  children: React.ReactNode
  onClose: () => void
}

const Modal: React.FC<Props> = ({ children, onClose }) => {
  return <div className="modal">
  <div className="modal__content">
      <img className="modal__close" src={closeIcon} alt="Fechar" onClick={onClose} />
      {children}
  </div>
</div>;
}

export default Modal;
