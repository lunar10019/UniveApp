import type { NextPage } from "next";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { useAppSelector } from "../store";
import styles from "./messages.module.scss";
import Stories from "./stories/Stories";
import Dialog from "./chats/Dialog";
import AvaSvg from "../assets/icons/ava.svg";
import AddStories from "./stories/AddStories";
import {
  getChatsData,
  updateUnreadMessagesCount,
} from "../store/chats/actions";
import Loader from "../components/loader/Loader";

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
];

const Messages: NextPage = () => {
  const dispatch = useDispatch();

  const { loading, data } = useAppSelector((state) => state.chats);

  useEffect(() => {
    if (!data) {
      dispatch(getChatsData(""));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.messages}>
      <div className={styles.stories}>
        <AddStories />

        {fakeDataStories.map((item) => (
          <Stories key={item.id} img={item.img} name={item.name} />
        ))}
      </div>

      <div className={styles.dialog}>
        {data &&
          data.map((item) => (
            <Dialog
              key={item.id}
              img={item.user.avatar}
              name={item.user.name}
              message={item.messages[0].value}
              time={item.messages[0].date}
              count={item.unreadMessagesCount}
              onClick={() => dispatch(updateUnreadMessagesCount(item.id))}
            />
          ))}

        {loading && <Loader />}
      </div>
    </div>
  );
};

export default Messages;
