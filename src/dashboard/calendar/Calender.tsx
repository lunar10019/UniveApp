import type { NextPage } from "next";
import { useTranslations } from "next-intl";

import TextButton from "../../components/buttons/TextButton";
import styles from "./calendar.module.scss";
import Table from "./Table";

const Calendar: NextPage = () => {
  const t = useTranslations("Dashboard");

  return (
    <div className={styles.calendar}>
      <h2>{t("upcomingSessions")}</h2>

      <Table />

      <div className={styles.button}>
        <TextButton text={"See All Sessions"} />
      </div>
    </div>
  );
};

export default Calendar;
