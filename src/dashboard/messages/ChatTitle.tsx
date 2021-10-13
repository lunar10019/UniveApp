import type { NextPage } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";

import styles from "./chatTitle.module.scss";
import AvaSvg from "../../assets/icons/ava.svg";

const ChatTitle: NextPage = () => {
  const t = useTranslations("Dashboard");

  return (
    <div className={styles.chatTitle}>
      <div className={styles.avatar}>
        <Image
          className={styles.img}
          alt={"Avatar"}
          src={AvaSvg}
          height={30}
          width={30}
        />
        <div className={styles.status} />
      </div>

      <h2>{t("messages")}</h2>
    </div>
  );
};

export default ChatTitle;
