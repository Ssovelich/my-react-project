import styles from "./Promo.module.css";
import { useState } from "react";

const Promo = () => {
  const [answer, setAnswer] = useState("");
  const handleChange = (event) => {
    setAnswer(event.target.value);
  };
  return (
    <div className={styles.wrap}>
      <h2 className={styles.tilel}>
        🎉Вгадай 5 значне число та отримай промокод!🎁
      </h2>
      <input
        className={styles.input}
        value={answer}
        type="text"
        name="answer"
        // className={styles.input}
        placeholder="Enter your answer to the question"
        onChange={handleChange}
      />
      {answer === "40486" && (
        <p className={styles.text}>
          Congratulations!🎉 You won a promocode on a 60% OFF.{" "}
          <code>#ILOVEGOIT2025</code>{" "}
        </p>
      )}
    </div>
  );
};

export default Promo;
