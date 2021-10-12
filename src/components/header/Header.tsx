import type { NextPage } from "next";
import styles from "./header.module.scss";
import Image from "next/image";
import NotificationSvg from "../../assets/notifications.svg";
import SettingsSvg from "../../assets/settings.svg";
import AvaSvg from "../../assets/ava.svg";

import Profile from "./Profile";

const Header: NextPage = () => {
  return (
    <div className={styles.header}>
      <Image alt={"Notifications"} src={NotificationSvg} />

      <Profile img={AvaSvg} name={"Mia V"} role={"student"} />

      <Image alt={"Settings"} src={SettingsSvg} />
    </div>
  );
};

export default Header;
