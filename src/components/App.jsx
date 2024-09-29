import { DiRedhat } from "react-icons/di";
import Section from "./Section/Section";

import FriendList from "./FriendList/FriendList";
import friends from "../friends.json";
import Pub from "./Pub/Pub";
import Modal from "./Modal/Modal";

export default function App() {
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
      <Section titel="Friend List">
        <FriendList friends={friends} />
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
