import React, { useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onClose, image }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        <img src={image?.urls?.regular} alt={image?.alt_description} />
      </div>
    </Modal>
  );
}
