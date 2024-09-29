import { useEffect, useState } from "react";
import styles from "./ModalWindow.module.css";

const ModalWindow = ({ onCloseModal }) => {
  const [count, setCount] = useState(() => {
    const val = localStorage.getItem("countValue");
    const parsedVal = JSON.parse(val) ?? 0;

    return parsedVal;
  });

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.code === "Escape") {
        onCloseModal();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onCloseModal]);

  useEffect(() => {
    const stringifiedValue = JSON.stringify(count);
    localStorage.setItem("countValue", stringifiedValue);
  }, [count]);

  const onBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  const onResetCount = () => {
    setCount(0);
  };

  return (
    <div onClick={onBackdropClick} className={styles.backdrop}>
      <div className={styles.modal}>
        <button
          onClick={onCloseModal}
          className={styles.closeBtn}
          type="button"
        >
          ❌
        </button>
        <h2 className={styles.titel}>Additional bar info</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ut
          tempore sapiente ea? Alias, rerum dolore nesciunt error nostrum porro!
        </p>
        <button
          onClick={() => setCount(count + 1)}
          type="button"
          className={styles.btn}
        >
          Click to increment: {count}
        </button>
        <button onClick={onResetCount} type="button" className={styles.btn}>
          Reset count
        </button>
      </div>
    </div>
  );
};

export default ModalWindow;
