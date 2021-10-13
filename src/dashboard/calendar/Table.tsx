import classNames from "classnames";
import type { NextPage } from "next";
import { useTranslations } from "next-intl";

import styles from "./table.module.scss";
import TableItem from "./TableItem";

const fakeData = [
  {
    id: 1,
    dayOfWeek: "Tomorrow",
    day: "09",
    month: "april",
    textDesc: "Database and Information Systems",
    text: "Master of Computer Science",
    time: "8:30am-1:00pm",
  },
  {
    id: 2,
    dayOfWeek: "Wed",
    day: "10",
    month: "april",
    textDesc: "AI and Machine Learning",
    text: "Master of Computer Science",
    time: "9:30am-12:00pm",
  },
  {
    id: 3,
    dayOfWeek: "Wed",
    day: "10",
    month: "april",
    textDesc: "Definition & Ideation",
    text: "Certificate UX/UI Design",
    time: "3:30pm-7:00pm",
  },
];

const Table: NextPage = () => {
  const t = useTranslations("Dashboard");

  return (
    <div className={styles.table}>
      <div className={classNames(styles.row, styles.head)}>
        <div className={styles.date}>{t("date")}</div>
        <div className={styles.class}>{t("class")}</div>
        <div className={styles.time}>{t("time")}</div>
      </div>

      <div className={styles.body}>
        {fakeData.map((item) => (
          <TableItem
            key={item.id}
            dayOfWeek={item.dayOfWeek}
            day={item.day}
            month={item.month}
            textDesc={item.textDesc}
            text={item.text}
            time={item.time}
          />
        ))}
      </div>
    </div>
  );
};

export default Table;
