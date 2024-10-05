import styles from "./Profile.module.css";

const Profile = ({
  id,
  name,
  phone,
  email,
  status,
  hasPhysicalAddress = false,
  onSayMyName,
  onDeleteProfile,
}) => {
  return (
    <>
      <li className={styles.profile}>
        <button
          className={styles.btnDel}
          type="button"
          onClick={() => onDeleteProfile(id)}
        >
          ❌
        </button>
        <h3>Name: {name}</h3>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <p>Status: {status}</p>
        <p>Has physical address: {hasPhysicalAddress ? "Yes" : "No"}</p>
        <button
          className={styles.btnSay}
          type="button"
          onClick={() => onSayMyName(name)}
        >
          Say my name!
        </button>
      </li>
    </>
  );
};

export default Profile;
