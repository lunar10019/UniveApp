import Spinner from "../icons/Spinner";
import styles from "./loader.module.scss";

const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <Spinner />
    </div>
  );
};

export default Loader;
