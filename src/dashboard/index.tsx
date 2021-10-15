import type { NextPage } from "next";
import { useTranslations } from "next-intl";
import { useAppSelector } from "../store";

import styles from "./index.module.scss";
import Information from "./information/Information";
import Messages from "./messages/Messages";

const Dashboard: NextPage = () => {
  const t = useTranslations("Dashboard");

  const { data } = useAppSelector((state) => state.profile);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>
          {t("hello")} {data && data.firstName}
        </h1>

        <div className={styles.content}>
          <Information />
          <Messages />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
