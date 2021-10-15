import type { NextPage } from "next";
import styles from "./header.module.scss";
import { useRouter } from "next/router";

import Profile from "./Profile";
import SettingsSvg from "../../assets/icons/settings.svg";
import ImageButton from "../buttons/ImageButton";
import Logo from "../icons/Logo";
import Notifications from "../icons/Notifications";

const Header: NextPage = () => {
  const router = useRouter();

  const handleNavigateHome = () => {
    router.push("/");
  };

  const handleNavigate = () => {
    router.push("/messages");
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo} onClick={handleNavigateHome}>
        <Logo />
      </div>

      <div className={styles.wrapper}>
        <div className={styles.notifications} onClick={handleNavigate}>
          <Notifications />
        </div>

        <Profile />

        <div className={styles.settings}>
          <ImageButton img={SettingsSvg} />
        </div>
      </div>
    </div>
  );
};

export default Header;
