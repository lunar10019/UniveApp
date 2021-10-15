import { useDispatch } from "react-redux";
import { useEffect } from "react";
import AddStories from "./AddStories";
import Story from "./Story";

import { getStoriesData } from "../../store/stories/actions";
import { useAppSelector } from "../../store";
import styles from "./stories.module.scss";
import Loader from "../../components/loader/Loader";

const Stories: React.FC = () => {
  const dispatch = useDispatch();

  const { loading, data } = useAppSelector((state) => state.stories);

  useEffect(() => {
    if (!data) {
      dispatch(getStoriesData());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.stories}>
      <AddStories />

      {data &&
        data.map((item) => (
          <Story key={item.id} img={item.avatar} name={item.name} />
        ))}
      {loading && <Loader />}
    </div>
  );
};

export default Stories;
