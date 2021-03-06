import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

import styles from "./chatTitle.module.scss";
import { useAppSelector } from "../../store";

const ChatTitle: React.FC = () => {
  const { t } = useTranslation("messages");

  const { data } = useAppSelector((state) => state.profile);

  return (
    <div className={styles.chatTitle}>
      <div className={styles.avatar}>
        {data && (
          <>
            <div className={styles.box}>
              <Image
                className={styles.img}
                alt={"Avatar"}
                src={data.avatar}
                height={30}
                width={30}
              />
            </div>

            <div className={styles.status} />
          </>
        )}
      </div>

      <h2>{t("messages")}</h2>
    </div>
  );
};

export default ChatTitle;
