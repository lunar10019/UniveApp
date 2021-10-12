import type { NextPage } from "next";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import styles from "./layout.module.scss";

const Layout: NextPage = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <div className={styles.headerAndContent}>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
