import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

import styles from "./courseInProgress.module.scss";
import TimeSvg from "../../assets/icons/time.svg";
import TextButton from "../../components/buttons/TextButton";
import ImgCourseSvg from "../../assets/icons/imgCourse.svg";
import BlurSvg from "../../assets/icons/blur.svg";
import CheckedSvg from "../../assets/icons/checked.svg";

const data = {
  title: "CERTIFICATE UX/UI design",
  period: "UX Research - Week 3",
  day: "08",
  month: "April",
  status: "In Progress",
};

const CourseInProgress: React.FC = () => {
  const { t } = useTranslation("dashboard");

  return (
    <div className={styles.courseInProgress}>
      <div className={styles.wrapperImage}>
        <Image alt="ImgCourse" src={ImgCourseSvg} />

        <div className={styles.imageBlur}>
          <Image alt="Blur" src={BlurSvg} />
        </div>

        <div className={styles.bookmark}>
          <Image alt="Checked" src={CheckedSvg} width={27} height={22} />
          <p>{t("checkedIn")}</p>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.wrapperCourse}>
          <div>
            <h3>{data.period}</h3>
            <p>{data.title}</p>
          </div>

          <div>
            <h4>{data.day}</h4>
            <h5>{data.month}</h5>
          </div>
        </div>

        <div className={styles.progressStatus}>
          <div className={styles.progress}>
            <Image alt="TimeSvg" src={TimeSvg} width={20} height={20} />
            <span>{data.status}</span>
          </div>

          <div>
            <TextButton text={t("joinNow")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInProgress;
