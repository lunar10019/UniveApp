import Calendar from "../calendar/Calendar";
import Course from "../course/Course";
import ActivePrograms from "./ActivePrograms";
import styles from "./information.module.scss";

const Information: React.FC = () => {
  return (
    <div className={styles.information}>
      <ActivePrograms />

      <div className={styles.calendarBlock}>
        <Course />
        <Calendar />
      </div>
    </div>
  );
};

export default Information;
