import styles from "./tab.module.scss";
import classNames from "classnames";

type Props = {
  icon: React.FC<{ color?: string }>;
  title: string;
  isActive?: boolean;
  onClick?: () => void;
};

const Tab: React.FC<Props> = ({ icon, title, onClick, isActive }) => {
  const Icon = icon;

  return (
    <div className={styles.tab} onClick={onClick}>
      {isActive ? <div className={styles.border} /> : null}

      <Icon color={isActive ? "#5855d6" : "#9592A6"} />

      <h4 className={classNames(isActive && styles.active)}>{title}</h4>
    </div>
  );
};

export default Tab;
