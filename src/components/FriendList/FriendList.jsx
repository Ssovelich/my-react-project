import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={styles.friendList}>
        {friends.map((friendItem) => {
          return (
            <FriendListItem
              key={friendItem.id}
              name={friendItem.name}
              avatar={friendItem.avatar}
              isOnline={friendItem.isOnline}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default FriendList;
