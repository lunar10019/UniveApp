import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

import styles from "./course.module.scss";
import ImgCourseSvg from "../../assets/icons/imgCourse.svg";
import CheckedSvg from "../../assets/icons/checked.svg";
import CourseInProgress from "./CourseInProgress";

const Course: React.FC = () => {
  const { t } = useTranslation("dashboard");

  return (
    <div className={styles.course}>
      <div className={styles.imageBlock}>
        <Image alt="Course" src={ImgCourseSvg} width={298} height={270} />

        <div className={styles.bookmark}>
          <Image alt="Checked" src={CheckedSvg} width={19} height={15} />
          <p>{t("checkedIn")}</p>
        </div>
      </div>

      <CourseInProgress />
    </div>
  );
};

export default Course;
