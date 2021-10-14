import classNames from "classnames";
import type { NextPage } from "next";
import Image from "next/image";

import styles from "./dialog.module.scss";

type Props = {
  img: StaticImageData;
  name: string;
  message: string;
  time: string;
  count: number;
  onClick?: () => void;
};

const Dialog: NextPage<Props> = ({
  img,
  name,
  message,
  time,
  count,
  onClick,
}) => {
  return (
    <div className={styles.dialog} onClick={onClick}>
      <div className={styles.info}>
        <div className={styles.avatar}>
          <Image alt={"Avatar"} src={img} height={55} width={55} />
        </div>

        <div className={styles.text}>
          <h3>{name}</h3>
          <h4 className={classNames(count > 0 && styles.active)}>{message}</h4>
        </div>
      </div>

      <div className={styles.time}>
        <h5>{"45 min"}</h5>

        {count > 0 && (
          <div className={styles.wrapper}>
            <p>{count}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dialog;
