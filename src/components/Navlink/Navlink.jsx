import React from "react";
import Styles from "../Navlink/Navlink.module.css";
const Navlink = ({ link, text, image }) => {
  return (
    <>
      <a href={link} className={Styles.link}>
        <img src={image} alt={`${text} image`} />
        <span>{text}</span>
      </a>
    </>
  );
};

export default Navlink;
