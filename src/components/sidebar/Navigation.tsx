import Image from "next/image";
import classNames from "classnames";

import styles from "./navigation.module.scss";

type Props = {
  text: string;
  img: StaticImageData;
  isActive?: boolean;
};

const Navigation: React.FC<Props> = ({ text, img, isActive }) => {
  return (
    <div className={classNames(styles.navigation, isActive && styles.active)}>
      <Image alt={"DashboardSvg"} src={img} />

      <div>{text}</div>
    </div>
  );
};

export default Navigation;
