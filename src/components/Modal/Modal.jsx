import { useState } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";
import styles from "./Modal.module.css";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onOpenModal = () => {
    setIsModalOpen(true);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={onOpenModal} type="button" className={styles.btn}>
        Open modal for additional details
      </button>
      {isModalOpen && <ModalWindow onCloseModal={onCloseModal} />}
    </>
  );
};

export default Modal;
