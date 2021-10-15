import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

import styles from "./activeProgramItem.module.scss";

type Props = {
  img: StaticImageData;
  grade: string;
  label: string;
  text: string;
};

const ActiveProgramItem: React.FC<Props> = ({ img, label, text, grade }) => {
  const { t } = useTranslation("dashboard");

  return (
    <div className={styles.activeProgramItem}>
      <div className={styles.description}>
        <Image
          className={styles.img}
          alt={"Logo"}
          src={img}
          height={68}
          width={68}
        />

        <div className={styles.wrapper}>
          <h3>{label}</h3>
          <p>{text}</p>
        </div>
      </div>

      <div className={styles.grade}>
        <h4>{grade}</h4>

        <p>{t("academic")}</p>
        <p>{t("average")}</p>
      </div>
    </div>
  );
};

export default ActiveProgramItem;
