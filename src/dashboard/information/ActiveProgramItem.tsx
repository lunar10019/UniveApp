import type { NextPage } from "next";
import Image from "next/image";

import styles from "./activeProgramItem.module.scss";

type Props = {
  img: StaticImageData;
  imgGrade: StaticImageData;
  label: string;
  text: string;
};

const ActiveProgramItem: NextPage<Props> = ({ img, label, text, imgGrade }) => {
  return (
    <div className={styles.activeProgramItem}>
      <div className={styles.firstBlock}>
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

      <div className={styles.secondBlock}>
        <Image
          alt={"Grade for the course"}
          src={imgGrade}
          height={44}
          width={44}
        />

        <p>Academic</p>
        <p>Average</p>
      </div>
    </div>
  );
};

export default ActiveProgramItem;
