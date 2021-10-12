import type { NextPage } from "next";
import styles from "./logo.module.scss";
import Image from "next/image";
import LogoSvg from "../../assets/logo.svg";

const Logo: NextPage = () => {
  return (
    <div className={styles.logo}>
      <Image alt="logo" src={LogoSvg} />
    </div>
  );
};

export default Logo;
