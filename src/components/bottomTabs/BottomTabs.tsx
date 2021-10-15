import useTranslation from "next-translate/useTranslation";

import styles from "./bottomTabs.module.scss";
import Tab from "./Tab";
import DashboardTab from "../icons/DashboardTab";
import CoursesTab from "../icons/CoursesTab";
import NotificationsTab from "../icons/NotificationsTab";
import React from "react";
import SettingsTab from "../icons/SettingsTab";

const BottomTabs: React.FC = () => {
  const { t } = useTranslation("common");

  const data = [
    {
      id: 1,
      icon: DashboardTab,
      title: t("dashboard"),
      isActive: true,
    },
    {
      id: 2,
      icon: CoursesTab,
      title: t("course"),
      isActive: false,
    },
    {
      id: 3,
      icon: NotificationsTab,
      title: t("notifications"),
      isActive: false,
    },
    {
      id: 4,
      icon: SettingsTab,
      title: t("settings"),
      isActive: false,
    },
  ];

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
