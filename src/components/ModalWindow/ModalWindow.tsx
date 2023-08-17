
import { useState } from 'react';
import styles from './ModalWindow.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: any
}

const ModalWindow: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.component}>
      <div className={styles.componentModal}>
        <div className={styles.componentModalContent}>
          {children}
          <button className={styles.componentModalContentButton} onClick={onClose}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
