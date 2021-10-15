import useTranslation from "next-translate/useTranslation";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { useAppSelector } from "../../store";
import TextButton from "../../components/buttons/TextButton";
import styles from "./calendar.module.scss";
import Table from "./Table";
import { getSessionsData } from "../../store/sessions/actions";

const Calendar: React.FC = () => {
  const { t } = useTranslation("dashboard");
  const [limit, setLimit] = useState("3");

  const loadAllSessions = () => setLimit(limit + "3");

  const dispatch = useDispatch();

  const { loading, data } = useAppSelector((state) => state.sessions);

  useEffect(() => {
    dispatch(getSessionsData(limit));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit]);

  return (
    <div className={styles.calendar}>
      <h2>{t("upcomingSessions")}</h2>

      <Table data={data} loading={loading} />

      {data && data.length < 4 && (
        <div className={styles.button}>
          <TextButton text={t("seeAll")} onClick={loadAllSessions} />
        </div>
      )}
    </div>
  );
};

export default Calendar;
