import type { NextPage } from "next";
import Image from "next/image";

import styles from "./dialog.module.scss";

type Props = {
  img: StaticImageData;
  name: string;
  message: string;
  time: string;
  count: number;
};

const Dialog: NextPage<Props> = ({ img, name, message, time, count }) => {
  return (
    <div className={styles.dialog}>
      <div className={styles.info}>
        <Image alt={"Plus"} src={img} height={55} width={55} />

        <div className={styles.text}>
          <h3>{name}</h3>
          <h4>{message}</h4>
        </div>
      </div>

      <div className={styles.time}>
        <h5>{time}</h5>

        <div className={styles.wrapper}>
          <p>{count}</p>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
