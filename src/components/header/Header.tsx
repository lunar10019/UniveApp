import type { NextPage } from "next";
import styles from "./header.module.scss";

import Profile from "./Profile";
import NotificationSvg from "../../assets/icons/notifications.svg";
import SettingsSvg from "../../assets/icons/settings.svg";
import AvaSvg from "../../assets/icons/ava.svg";
import ImageButton from "../buttons/ImageButton";
import Logo from "../icons/Logo";

const Header: NextPage = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>

      <div className={styles.wrapper}>
        <ImageButton img={NotificationSvg} width={50} height={50} />

        <Profile img={AvaSvg} name={"Mia V"} role={"student"} />

        <div className={styles.settings}>
          <ImageButton img={SettingsSvg} />
        </div>
      </div>
    </div>
  );
};

export default Header;
