import React from "react";
import styles from "../Login/login.module.css";
import { imageSources as images } from "../../imageSources/imageSources";
import Button from "../../components/button/Button";
const Login = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.ctaImage1}>
            <img src={images.ctaImage1} alt="cta-image" />
          </div>
          <Button text={"GET ALL THERE"} classname={styles.ctaBtn} />
          <p>
            Get Premier Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Facilis officia atque magni nisi quos quas eum, quibusdam debitis
            ratione na
          </p>
          <div className={styles.ctaImage2}>
            <img src={images.ctaImage2} alt="cta-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
