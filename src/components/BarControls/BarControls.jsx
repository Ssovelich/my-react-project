import styles from "./BarControl.module.css";

const BarControls = ({ onAddDrink, onMinusDrink }) => {
  return (
    <>
      <div className={styles.wrap}>
        <button onClick={() => onAddDrink("beer")} className={styles.btn}>
          Add beer
        </button>
        <button onClick={() => onAddDrink("wine")} className={styles.btn}>
          Add wine
        </button>
        <button onClick={() => onAddDrink("whiskey")} className={styles.btn}>
          Add whiskey
        </button>
      </div>
      <div className={styles.wrap}>
        <button onClick={() => onMinusDrink("beer")} className={styles.btn}>
          Minus beer
        </button>
        <button onClick={() => onMinusDrink("wine")} className={styles.btn}>
          Minus wine
        </button>
        <button onClick={() => onMinusDrink("whiskey")} className={styles.btn}>
          Minus whiskey
        </button>
      </div>
    </>
  );
};

export default BarControls;
