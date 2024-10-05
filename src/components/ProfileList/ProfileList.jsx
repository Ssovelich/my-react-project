import styles from "./ProfileList.module.css";
import Profile from "../Profile/Profile";

const ProfileList = ({ profiles, onSayMyName, onDeleteProfile }) => {
  return (
    <div>
      <div>
        <ul className={styles.profileList}>
          {profiles.map((profile) => {
            return (
              <Profile
                key={profile.id}
                id={profile.id}
                name={profile.name}
                phone={profile.phone}
                email={profile.email}
                status={profile.status}
                hasPhysicalAddress={profile.hasPhysicalAddress}
                onSayMyName={onSayMyName}
                onDeleteProfile={onDeleteProfile}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProfileList;
