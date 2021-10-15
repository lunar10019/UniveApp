import type { NextPage } from "next";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { useAppSelector } from "../store";
import styles from "./messages.module.scss";
import Stories from "./stories/Stories";
import Dialog from "./chats/Dialog";
import AddStories from "./stories/AddStories";
import {
  getChatsData,
  updateUnreadMessagesCount,
} from "../store/chats/actions";
import Loader from "../components/loader/Loader";
import classNames from "classnames";

const fakeDataStories = [
  {
    id: 1,
    img: require("../assets/icons/dianne.jpg"),
    name: "Dianne",
  },
  {
    id: 2,
    img: require("../assets/icons/jarvis.jpg"),
    name: "Jarvis",
  },
  {
    id: 3,
    img: require("../assets/icons/miles.jpg"),
    name: "Miles",
  },
];

const Messages: NextPage<{ isMobile?: boolean }> = ({ isMobile }) => {
  const dispatch = useDispatch();

  const { loading, data } = useAppSelector((state) => state.chats);

  useEffect(() => {
    if (!data) {
      dispatch(getChatsData(""));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classNames(styles.messages, isMobile && styles.mobile)}>
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
