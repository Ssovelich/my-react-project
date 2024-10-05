import styles from "./BarStats.module.css";

const BarStats = ({ bottles, total, onResetDrink }) => {
  return (
    <>
      <button onClick={() => onResetDrink()} className={styles.btn}>
        Reset bottles
      </button>
      <ul>
        <li>Beer: {bottles.beer}</li>
        <li>Wine: {bottles.wine}</li>
        <li>Whiskey: {bottles.whiskey}</li>
        <li>Total: {total}</li>
      </ul>
    </>
  );
};

export default BarStats;
