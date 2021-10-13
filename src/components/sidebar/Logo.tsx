import type { NextPage } from "next";
import Image from "next/image";

import styles from "./logo.module.scss";
import LogoSvg from "../../assets/icons/logo.svg";

const Logo: NextPage = () => {
  return (
    <div className={styles.logo}>
      <Image alt="logo" src={LogoSvg} />
    </div>
  );
};

export default Logo;
