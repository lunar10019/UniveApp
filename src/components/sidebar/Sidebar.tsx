import type { NextPage } from "next";
import Navigation from "./Navigation";
import Logo from "./Logo";
import styles from "./sidebar.module.scss";
import DashboardSvg from "../../assets/dashboard.svg";
import CoursesSvg from "../../assets/courses.svg";
import { useTranslations } from "next-intl";

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
