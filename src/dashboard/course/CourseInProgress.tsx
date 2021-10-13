import type { NextPage } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";

import styles from "./courseInProgress.module.scss";
import TimeSvg from "../../assets/icons/time.svg";
import TextButton from "../../components/buttons/TextButton";

const CourseInProgress: NextPage = () => {
  const t = useTranslations("Dashboard");

  return (
    <div className={styles.courseInProgress}>
      <div className={styles.wrapperCourse}>
        <div>
          <h3>UX Research - Week 3</h3>
          <p>CERTIFICATE UX/UI design</p>
        </div>

        <div>
          <h4>08</h4>
          <h5>April</h5>
        </div>
      </div>

      <div className={styles.progressStatus}>
        <div className={styles.progress}>
          <Image alt="TimeSvg" src={TimeSvg} width={20} height={20} />
          <span>In Progress</span>
        </div>

        <div>
          <TextButton text={t("joinNow")} />
        </div>
      </div>
    </div>
  );
};

export default CourseInProgress;
