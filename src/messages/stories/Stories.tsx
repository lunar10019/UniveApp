import type { NextPage } from "next";
import Image from "next/image";

import styles from "./stories.module.scss";

type Props = {
  img: StaticImageData;
  name: string;
};

const Stories: NextPage<Props> = ({ img, name }) => {
  return (
    <div className={styles.stories}>
      <div className={styles.box}>
        <div className={styles.gradient}>
          <div className={styles.image}>
            <Image alt={"Avatar"} src={img} width={40} height={40} />
          </div>
        </div>

        <h4>{name}</h4>
      </div>
    </div>
  );
};

export default Stories;
