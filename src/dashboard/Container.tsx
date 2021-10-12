import type { NextPage } from "next";
import React from "react";
import styles from "./container.module.scss";
import Information from "./information/Information";
import Messages from "./messages/Messages";

const Container: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Hello, Mia!</h1>

      <div className={styles.content}>
        <Information />
        <Messages />
      </div>
    </div>
  );
};

export default Container;
