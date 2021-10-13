import type { NextPage } from "next";

import styles from "./messages.module.scss";
import Stories from "./stories/Stories";
import Dialog from "./chats/Dialog";
import AvaSvg from "../assets/icons/ava.svg";
import AddStories from "./stories/AddStories";

const fakeDataStories = [
  {
    id: 1,
    img: AvaSvg,
    name: "Dianne",
  },
  {
    id: 2,
    img: AvaSvg,
    name: "Jarvis",
  },
  {
    id: 3,
    img: AvaSvg,
    name: "Miles",
  },
  // {
  //   id: 4,
  //   img: AvaSvg,
  //   name: "Dianne",
  // },
  // {
  //   id: 5,
  //   img: AvaSvg,
  //   name: "Jarvis",
  // },
];

const fakeDataDialogs = [
  {
    id: 1,
    img: AvaSvg,
    name: "Sophie Kowalski",
    message: "Thanks, Mia. Please let me know when I can..",
    time: "3 min",
    count: 1,
  },
  {
    id: 2,
    img: AvaSvg,
    name: "Sophie Kowalski",
    message: "Thanks, Mia. Please let me know when I can..",
    time: "3 min",
    count: 1,
  },
  {
    id: 3,
    img: AvaSvg,
    name: "Sophie Kowalski",
    message: "Thanks, Mia. Please let me know when I can..",
    time: "3 min",
    count: 1,
  },
  {
    id: 1,
    img: AvaSvg,
    name: "Sophie Kowalski",
    message: "Thanks, Mia. Please let me know when I can..",
    time: "3 min",
    count: 1,
  },
  {
    id: 2,
    img: AvaSvg,
    name: "Sophie Kowalski",
    message: "Thanks, Mia. Please let me know when I can..",
    time: "3 min",
    count: 1,
  },
];

const Messages: NextPage = () => {
  return (
    <div className={styles.messages}>
      <div className={styles.stories}>
        <AddStories />

        {fakeDataStories.map((item) => (
          <Stories key={item.id} img={item.img} name={item.name} />
        ))}
      </div>

      <div className={styles.dialog}>
        {fakeDataDialogs.map((item) => (
          <Dialog
            key={item.id}
            img={item.img}
            name={item.name}
            message={item.message}
            time={item.time}
            count={item.count}
          />
        ))}
      </div>
    </div>
  );
};

export default Messages;
