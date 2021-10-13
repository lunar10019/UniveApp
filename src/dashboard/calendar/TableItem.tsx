import classNames from "classnames";
import type { NextPage } from "next";
import styles from "./table.module.scss";

type Props = {
  dayOfWeek: string;
  day: string;
  month: string;
  textDesc: string;
  text: string;
  time: string;
};

const TableItem: NextPage<Props> = ({
  dayOfWeek,
  day,
  month,
  textDesc,
  text,
  time,
}) => {
  return (
    <div className={styles.row}>
      <div className={classNames(styles.date, styles.item)}>
        <h3>{dayOfWeek}</h3>
        <h4>{day}</h4>
        <h5>{month}</h5>
      </div>

      <div className={classNames(styles.class, styles.item)}>
        <h3>{textDesc}</h3>
        <h4>{text}</h4>
      </div>

      <div className={classNames(styles.time, styles.item)}>
        <h3>{time}</h3>
      </div>
    </div>
  );
};

export default TableItem;
