import type { NextPage } from "next";
import Image from "next/image";

import styles from "./profile.module.scss";

type Props = {
  img: StaticImageData;
  name: string;
  role: string;
};

const Profile: NextPage<Props> = ({ img, name, role }) => {
  return (
    <div className={styles.profile}>
      <Image
        className={styles.img}
        alt={"Avatar"}
        src={img}
        height={40}
        width={40}
      />

      <div className={styles.wrapper}>
        <h1>{name}</h1>
        <p> {role}</p>
      </div>
    </div>
  );
};

export default Profile;
