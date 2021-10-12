import type { NextPage } from "next";
import styles from "./textButton.module.scss";

type Props = {
  text: string;
  onClick?: () => void;
};

const TextButton: NextPage<Props> = ({ text, onClick }) => {
  return (
    <div className={styles.textButton} onClick={onClick}>
      {text}
    </div>
  );
};

export default TextButton;
