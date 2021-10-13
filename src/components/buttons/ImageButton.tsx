import type { NextPage } from "next";
import Image from "next/image";

import styles from "./imageButton.module.scss";

type Props = {
  img: StaticImageData;
  height?: number;
  width?: number;
  onClick?: () => void;
};

const ImageButton: NextPage<Props> = ({ img, onClick, width, height }) => {
  return (
    <div className={styles.imageButton} onClick={onClick}>
      <Image alt={"imageButton"} src={img} width={width} height={height} />
    </div>
  );
};

export default ImageButton;
