import classNames from "classnames";
import type { NextPage } from "next";
import {
  dayOfMonthFormat,
  dayOfWeekFormat,
  monthFormat,
  timeFormat,
} from "../../utils/date";

import styles from "./table.module.scss";

type Props = {
  startDate: string;
  endDate: string;
  description: string;
  title: string;
};

const TableItem: NextPage<Props> = ({
  startDate,
  endDate,
  description,
  title,
}) => {
  return (
    <div className={styles.row}>
      <div className={classNames(styles.date, styles.item)}>
        <h3>{dayOfWeekFormat(startDate)}</h3>
        <h4>{dayOfMonthFormat(startDate)}</h4>
        <h5>{monthFormat(startDate)}</h5>
      </div>

      <div className={classNames(styles.class, styles.item)}>
        <h3>{description}</h3>
        <h4>{title}</h4>
      </div>

      <div className={classNames(styles.time, styles.item)}>
        <h3>{`${timeFormat(startDate)}-${timeFormat(endDate)}`}</h3>
      </div>
    </div>
  );
};

export default TableItem;
