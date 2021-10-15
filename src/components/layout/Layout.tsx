import BottomTabs from "../bottomTabs/BottomTabs";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import styles from "./layout.module.scss";

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <div className={styles.headerAndContent}>
        <Header />
        {children}

        <div className={styles.bottomTabs}>
          <BottomTabs />
        </div>
      </div>
    </div>
  );
};

export default Layout;
