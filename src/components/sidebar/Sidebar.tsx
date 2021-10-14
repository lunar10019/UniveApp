import type { NextPage } from "next";
import { useTranslations } from "next-intl";

import styles from "./sidebar.module.scss";
import Navigation from "./Navigation";
import Logo from "./Logo";
import DashboardSvg from "../../assets/icons/dashboard.svg";
import CoursesSvg from "../../assets/icons/courses.svg";

const Sidebar: NextPage = () => {
  const t = useTranslations("Dashboard");

  return (
    <aside className={styles.sidebar}>
      <Logo />

      <Navigation text={t("dashboard")} img={DashboardSvg} isActive />

      <Navigation text={t("course")} img={CoursesSvg} isActive={false} />
    </aside>
  );
};

export default Sidebar;
