import React from "react";
import styles from "./Home.module.css";
import Slider from "../../components/Slider/Slider";
import { slideData } from "../../data/data";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <Slider slides={slideData} />
      </div>
    </>
  );
};

export default Home;
