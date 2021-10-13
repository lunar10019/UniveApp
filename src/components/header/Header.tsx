import type { NextPage } from "next";
import styles from "./header.module.scss";
import Image from "next/image";

import Profile from "./Profile";
import NotificationSvg from "../../assets/icons/notifications.svg";
import SettingsSvg from "../../assets/icons/settings.svg";
import AvaSvg from "../../assets/icons/ava.svg";

const Header: NextPage = () => {
  return (
    <div className={styles.header}>
      <Image
        alt={"Notifications"}
        src={NotificationSvg}
        width={50}
        height={50}
      />

      <Profile img={AvaSvg} name={"Mia V"} role={"student"} />

      <Image alt={"Settings"} src={SettingsSvg} />
    </div>
  );
};

export default Header;
