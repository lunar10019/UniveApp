import type { NextPage } from "next";
import { useTranslations } from "next-intl";

import styles from "./bottomTabs.module.scss";
import Tab from "./Tab";
import DashboardTab from "../icons/DashboardTab";
import CoursesTab from "../icons/CoursesTab";
import NotificationsTab from "../icons/NotificationsTab";
import React from "react";
import SettingsTab from "../icons/SettingsTab";

export const icons = {
  dashboard: DashboardTab,
};

const data = [
  {
    id: 1,
    icon: DashboardTab,
    title: "Dashboard",
    isActive: true,
  },
  {
    id: 2,
    icon: CoursesTab,
    title: "Courses",
    isActive: false,
  },
  {
    id: 3,
    icon: NotificationsTab,
    title: "Notifications",
    isActive: false,
  },
  {
    id: 4,
    icon: SettingsTab,
    title: "Settings",
    isActive: false,
  },
];

const BottomTabs: NextPage = () => {
  const t = useTranslations("Dashboard");

  return (
    <div className={styles.bottomTabs}>
      {data.map((item) => (
        <Tab
          key={item.id}
          icon={item.icon}
          title={item.title}
          isActive={item.isActive}
        />
      ))}
    </div>
  );
};

export default BottomTabs;
