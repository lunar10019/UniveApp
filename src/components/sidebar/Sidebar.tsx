import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

import styles from "./sidebar.module.scss";
import Navigation from "./Navigation";
import Logo from "./Logo";
import DashboardSvg from "../../assets/icons/dashboard.svg";
import CoursesSvg from "../../assets/icons/courses.svg";

const Sidebar: React.FC = () => {
  const { t } = useTranslation("common");

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
