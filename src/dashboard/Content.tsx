import type { NextPage } from "next";
import Container from "./Container";
import styles from "./content.module.scss";

const Content: NextPage = () => {
  return (
    <div className={styles.content}>
      <Container />
    </div>
  );
};

export default Content;
