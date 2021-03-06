/* eslint-disable react-hooks/exhaustive-deps */
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

import styles from "./mobileMessages.module.scss";
import ImageButton from "../components/buttons/ImageButton";
import Messages from "./Messages";
import ArrowSvg from "../assets/icons/arrow.svg";

const MobileMessages: React.FC = () => {
  const { t } = useTranslation("messages");
  const router = useRouter();

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 790) {
        router.replace("/");
      }
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className={styles.mobileMessages}>
      <div>
        <Link href="/">
          <a className={styles.route}>
            <ImageButton img={ArrowSvg} />
            <h3>{t("messages")}</h3>
          </a>
        </Link>
      </div>

      <div className={styles.messages}>
        <Messages isMobile />
      </div>
    </div>
  );
};

export default MobileMessages;
