import type { NextPage } from "next";
import { useTranslations } from "next-intl";

import styles from "./activePrograms.module.scss";
import ActiveProgramItem from "./ActiveProgramItem";
import UniversityLogoSvg from "../../assets/icons/universityLogo.svg";
import AcademyLogoSvg from "../../assets/icons/academyLogo.svg";

const fakeData = [
  {
    id: 1,
    img: UniversityLogoSvg,
    grade: "A-",
    label: "Master of Computer Science",
    text: "University of Upstate\nat Brookstone",
  },
  {
    id: 2,
    img: AcademyLogoSvg,
    grade: "--",
    label: "CERTIFICATE UX/UI design",
    text: "Academy of Art and Technology\nat Dursburg",
  },
];

const ActivePrograms: NextPage = () => {
  const t = useTranslations("Dashboard");

  return (
    <div className={styles.activePrograms}>
      <h2>{t("activePrograms")}</h2>

      <div className={styles.wrapper}>
        {fakeData.map((item) => (
          <ActiveProgramItem
            key={item.id}
            img={item.img}
            grade={item.grade}
            label={item.label}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default ActivePrograms;
