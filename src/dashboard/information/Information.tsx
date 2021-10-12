import type { NextPage } from "next";
import ActivePrograms from "./ActivePrograms";
import CalendarBlock from "../CalendarBlock/CalendarBlock";
import styles from "./information.module.scss";

const Information: NextPage = () => {
  return (
    <div className={styles.information}>
      <ActivePrograms />
      {/*  компонент не нужон */}
      <CalendarBlock />
    </div>
  );
};

export default Information;
