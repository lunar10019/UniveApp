import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

import styles from "./sidebar.module.scss";
import Navigation from "./Navigation";
import Logo from "./Logo";
import DashboardSvg from "../../assets/icons/dashboard.svg";
import CoursesSvg from "../../assets/icons/courses.svg";

const Sidebar: React.FC = () => {
  const t = useTranslations("Dashboard");

  const route = useRouter();
  const currentRoute = route.route;

  return (
    <aside className={styles.sidebar}>
      <Logo />

      <Navigation
        text={t("dashboard")}
        img={DashboardSvg}
        isActive={currentRoute === "/"}
      />

      <Navigation
        text={t("course")}
        img={CoursesSvg}
        isActive={currentRoute === "/courses"}
      />
    </aside>
  );
};

export default Sidebar;
