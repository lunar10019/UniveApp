import classNames from "classnames";
import type { NextPage } from "next";
import { useTranslations } from "next-intl";

import styles from "./table.module.scss";
import TableItem from "./TableItem";

const fakeDate = [
  {
    id: 1,
    description: "Database and Information Systems",
    title: "Master of Computer Science",
    startDate: "2021-10-14T04:25:03Z",
    endDate: "2020-11-16T04:25:03Z",
  },
  {
    id: 2,
    description: "AI and Machine Learning",
    title: "Master of Computer Science",
    startDate: "2020-11-16T04:25:03Z",
    endDate: "2020-11-16T04:25:03Z",
  },
  {
    id: 3,
    description: "Definition & Ideation",
    title: "Certificate UX/UI Design",
    startDate: "2020-11-16T04:25:03Z",
    endDate: "2020-11-16T04:25:03Z",
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
        {fakeDate.map((item) => (
          <TableItem
            key={item.id}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Table;
