import React from "react";
import styles from "../header/header.module.css";
import { imageSources } from "../../imageSources/imageSources";
import Button from "../button/Button";
import { navdata } from "../../data/data";
import Navlink from "../Navlink/Navlink";
import { auth, provider } from "../../firebase";

import { signInWithPopup } from "firebase/auth";

const handleAuth = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
const Header = () => {
  return (
    <>
      <header>
        <div className={styles.left}>
          <div className={styles.logo}>
            <img src={imageSources.logo} alt="logo" />
          </div>
          <nav>
            <ul>
              {navdata.map(({ text, image, path }) => {
                return (
                  <li>
                    <Navlink text={text} image={image} link={path} />
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <Button onclick={handleAuth} classname={styles.login} text={"Login"} />
      </header>
    </>
  );
};

export default Header;
