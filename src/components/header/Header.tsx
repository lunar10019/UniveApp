import type { NextPage } from "next";
import styles from "./header.module.scss";

import Profile from "./Profile";
import NotificationSvg from "../../assets/icons/notifications.svg";
import SettingsSvg from "../../assets/icons/settings.svg";
import AvaSvg from "../../assets/icons/ava.svg";
import ImageButton from "../buttons/ImageButton";

const Header: NextPage = () => {
  return (
    <div className={styles.header}>
      <ImageButton img={NotificationSvg} width={50} height={50} />

      <Profile img={AvaSvg} name={"Mia V"} role={"student"} />

      <ImageButton img={SettingsSvg} />
    </div>
  );
};

export default Header;
