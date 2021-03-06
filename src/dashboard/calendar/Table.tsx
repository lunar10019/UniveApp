import classNames from "classnames";
import useTranslation from "next-translate/useTranslation";
import Loader from "../../components/loader/Loader";
import { Session } from "../../store/sessions/types";

import styles from "./table.module.scss";
import TableItem from "./TableItem";

type Props = {
  data: Session[] | null;
  loading: boolean;
};

const Table: React.FC<Props> = ({ data, loading }) => {
  const { t } = useTranslation("dashboard");

  return (
    <div className={styles.table}>
      <div className={classNames(styles.row, styles.head)}>
        <div className={styles.date}>{t("date")}</div>
        <div className={styles.class}>{t("class")}</div>
        <div className={styles.time}>{t("time")}</div>
      </div>

      <div className={styles.body}>
        {data?.map((item) => (
          <TableItem
            key={item.id}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
            title={item.title}
          />
        ))}

        {loading && <Loader />}
      </div>
    </div>
  );
};

export default Table;
