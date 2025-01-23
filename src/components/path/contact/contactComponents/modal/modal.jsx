import React from "react";
import ModalBox from "./modalComponents/modalBox.jsx";
import './modal.scss'

function Modal({ isModalOpen, setIsModalOpen }) {
  const modalStyle = {
    visibility: isModalOpen ? 'visible' : 'hidden',
    opacity: 1,
    
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="modal" className="modal" style={modalStyle}>
      <ModalBox closeModal={closeModal} />
    </section>
  );
}

export default Modal;