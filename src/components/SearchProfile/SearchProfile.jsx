import styles from "./SearchProfile.module.css";
import { useId } from "react";

const SearchProfile = ({ value, onFilter }) => {
  const searchFieldId = useId();

  return (
    <div className={styles.searchWrap}>
      <label className={styles.searchLabel} htmlFor={searchFieldId}>
        Fild contacts by name
      </label>
      <input
        className={styles.searchInput}
        type="text"
        name="search"
        value={value}
        onChange={(event) => onFilter(event.target.value)}
        id={searchFieldId}
        placeholder="Enter keyword to search"
      />
    </div>
  );
};

export default SearchProfile;
