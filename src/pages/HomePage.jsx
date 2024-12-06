import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import Section from "../components/Section/Section";
import Promo from "../components/Promo/Promo";
import FormAddProfile from "../components/FormAddProfile/FormAddProfile";
import profilesData from "../profiles.json";
import SearchProfile from "../components/SearchProfile/SearchProfile";
import ProfileList from "../components/ProfileList/ProfileList";
import Pub from "../components/Pub/Pub";
import Modal from "../components/Modal/Modal";

const HomePage = () => {
  const [profiles, setProfiles] = useState(() => {
    const storagedProfiles = localStorage.getItem("profiles");
    const parsedProfiles = JSON.parse(storagedProfiles) ?? profilesData;

    return parsedProfiles;
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("profiles", JSON.stringify(profiles));
  }, [profiles]);

  const onAddProfile = (formData) => {
    const finalProfile = {
      ...formData,
      id: nanoid(),
    };

    setProfiles((prevState) => [...prevState, finalProfile]);
  };

  function onDeleteProfile(profileId) {
    setProfiles((prevState) => {
      return prevState.filter((profile) => profile.id !== profileId);
    });
  }

  const onSayMyName = (profileName) => {
    console.log("profileName: ", profileName);
  };

  const filteredPrifile = profiles.filter(
    (profile) =>
      profile.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
      profile.email.toLowerCase().includes(filter.toLowerCase().trim()) ||
      profile.phone.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <div>
      <Section titel="Promo code">
        <Promo />
      </Section>
      <Section>
        <FormAddProfile onAddProfile={onAddProfile} />
      </Section>
      <Section>
        <SearchProfile value={filter} onFilter={setFilter} />
        <ProfileList
          onSayMyName={onSayMyName}
          profiles={filteredPrifile}
          onDeleteProfile={onDeleteProfile}
        />
      </Section>
      <Section titel="PUB">
        <Pub />
      </Section>
      <Section titel="Modal">
        <Modal />
      </Section>
    </div>
  );
};

export default HomePage;
