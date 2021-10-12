import type { NextPage } from "next";
import React from "react";
import styles from "./course.module.scss";
import Image from "next/image";
import ImgCourseSvg from "../../assets/imgCourse.svg";
import CheckedSvg from "../../assets/checked.svg";
import CourseInProgress from "./CourseInProgress";
import { useTranslations } from "next-intl";

const Course: NextPage = () => {
  const t = useTranslations("Dashboard");

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
