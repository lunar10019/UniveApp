import type { NextPage } from "next";
import React from "react";
import styles from "./calendarBlock.module.scss";
import Calendar from "./Calender";
import Course from "./Course";

const CalendarBlock: NextPage = () => {
  return (
    <div className={styles.calendarBlock}>
      <Course />
      <Calendar />
    </div>
  );
};

export default CalendarBlock;
