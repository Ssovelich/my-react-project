import styles from "./BarControl.module.css";

const BarControls = ({ onAddDrink }) => {
  return (
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
  );
};

export default BarControls;
