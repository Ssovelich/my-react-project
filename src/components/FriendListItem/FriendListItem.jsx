import clsx from "clsx";
import styles from "../FriendList/FriendList.module.css";

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <>
      <li className={styles.friendListItem}>
        <img className={styles.avatar} src={avatar} alt="Avatar" width="48" />
        <p className={styles.name}>{name}</p>
        <p
          className={clsx(
            styles.status,
            isOnline ? styles.statusIsOnline : styles.statusIsOffline
          )}
        >
          {isOnline ? "Online" : "Offline"}
        </p>
        {/* <p className={clsx(styles.status, {
              [styles.statusIsOnline]: isOnline === true,
              [styles.statusIsOffline]: isOnline === false,
            })}>{isOnline ? "Online" : "Offline"} </p> */}
      </li>
    </>
  );
};

export default FriendListItem;
