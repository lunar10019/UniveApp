import Image from "next/image";
import { useTranslations } from "next-intl";

import styles from "./story.module.scss";
import PlusSvg from "../../assets/icons/plus.svg";

const AddStory: React.FC = () => {
  const t = useTranslations("Dashboard");

  return (
    <div className={styles.story}>
      <div className={styles.box}>
        <div className={styles.add}>
          <Image
            className={styles.plus}
            alt={"Plus"}
            src={PlusSvg}
            height={13}
            width={13}
          />
        </div>
        <h4>{t("add")}</h4>
      </div>
    </div>
  );
};

export default AddStory;
