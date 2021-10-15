import Image from "next/image";

import styles from "./logo.module.scss";
import LogoSvg from "../../assets/icons/logo.svg";
import { useRouter } from "next/router";

const Logo: React.FC = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/");
  };

  return (
    <div className={styles.logo} onClick={handleNavigate}>
      <Image alt="logo" src={LogoSvg} />
    </div>
  );
};

export default Logo;
