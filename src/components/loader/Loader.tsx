import type { NextPage } from "next";
import Spinner from "../icons/Spinner";
import styles from "./loader.module.scss";

const Loader: NextPage = () => {
  return (
    <div className={styles.loader}>
      <Spinner />
    </div>
  );
};

export default Loader;
