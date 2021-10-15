/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

import styles from "./mobileMessages.module.scss";
import ImageButton from "../components/buttons/ImageButton";
import Messages from "./Messages";
import ArrowSvg from "../assets/icons/arrow.svg";

const MobileMessages: NextPage = () => {
  const t = useTranslations("Dashboard");
  const router = useRouter();

  useEffect(() => {
    const onResize = (event) => {
      if (event.target.innerWidth > 790) {
        router.replace("/");
      }
    };
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
