import type { NextPage } from "next";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { useAppSelector } from "../../store";

import styles from "./profile.module.scss";
import { getProfileData } from "../../store/profile/actions";
import Loader from "../loader/Loader";

const Profile: NextPage = () => {
  const dispatch = useDispatch();

  const { loading, data } = useAppSelector((state) => state.profile);

  useEffect(() => {
    if (!data) {
      dispatch(getProfileData());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.profile}>
      {!loading && data ? (
        <>
          <Image
            className={styles.img}
            alt={"Avatar"}
            src={data.avatar}
            height={40}
            width={40}
          />

          <div className={styles.wrapper}>
            <h1>{`${data.firstName} ${data.lastName}`}</h1>
            <p> {data.role}</p>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Profile;
