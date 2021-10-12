import type { NextPage } from "next";
import ActiveProgramItem from "./ActiveProgramItem";
import styles from "./activePrograms.module.scss";
import UniversityLogoSvg from "../../assets/universityLogo.svg";
import AcademyLogoSvg from "../../assets/academyLogo.svg";
import GradeFirstCourseSvg from "../../assets/gradeFirstCourse.svg";
import GradeSecondCourseSvg from "../../assets/gradeSecondCourse.svg";
import { useTranslations } from "next-intl";

const fakeData = [
  {
    id: 1,
    img: UniversityLogoSvg,
    imgGrade: GradeFirstCourseSvg,
    label: "Master of Computer Science",
    text: "University of Upstate\nat Brookstone",
  },
  {
    id: 2,
    img: AcademyLogoSvg,
    imgGrade: GradeSecondCourseSvg,
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
            imgGrade={item.imgGrade}
            label={item.label}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default ActivePrograms;
