import useTranslation from "next-translate/useTranslation";
import { useAppSelector } from "../store";

import styles from "./index.module.scss";
import Information from "./information/Information";
import Messages from "./messages/Messages";

const Dashboard: React.FC = () => {
  const { t } = useTranslation("dashboard");

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
