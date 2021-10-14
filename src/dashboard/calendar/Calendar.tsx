import type { NextPage } from "next";
import { useTranslations } from "next-intl";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { useAppSelector } from "../../store";
import TextButton from "../../components/buttons/TextButton";
import styles from "./calendar.module.scss";
import Table from "./Table";
import { getSessionsData } from "../../store/sessions/actions";

const Calendar: NextPage = () => {
  const t = useTranslations("Dashboard");

  const dispatch = useDispatch();

  const { loading, data } = useAppSelector((state) => state.sessions);

  useEffect(() => {
    if (!data) {
      dispatch(getSessionsData("3"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.calendar}>
      <h2>{t("upcomingSessions")}</h2>

      <Table data={data} loading={loading} />

      {data && data.length < 4 && (
        <div className={styles.button}>
          <TextButton
            text={"See All Sessions"}
            onClick={() => dispatch(getSessionsData(""))}
          />
        </div>
      )}
    </div>
  );
};

export default Calendar;
