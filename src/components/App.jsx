import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { DiRedhat } from "react-icons/di";

import Section from "./Section/Section";
import Promo from "./Promo/Promo";
import FormAddProfile from "./FormAddProfile/FormAddProfile";
import profilesData from "../profiles.json";
import SearchProfile from "./SearchProfile/SearchProfile";
import ProfileList from "./ProfileList/ProfileList";
import Pub from "./Pub/Pub";
import Modal from "./Modal/Modal";

export default function App() {
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
      <Section titel="Test titel">
        <p>
          <DiRedhat className="my-icon" size="45" color="green" />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
          aliquid fugit, molestiae sequi modi odio natus ex vitae deleniti
          corrupti.
        </p>
      </Section>
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
}
