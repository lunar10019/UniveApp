import type { NextPage } from "next";

import ChatTitle from "./ChatTitle";
import MessagesSection from "../../messages/Messages";
import styles from "./messages.module.scss";

const Messages: NextPage = () => {
  return (
    <div className={styles.messages}>
      <ChatTitle />
      <MessagesSection />
    </div>
  );
};

export default Messages;
