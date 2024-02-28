import React from "react";
import Styles from "../Navlink/Navlink.module.css";
import { Link, NavLink } from "react-router-dom";
const Navlink = ({ link, text, image }) => {
  return (
    <>
      <NavLink to={link} className={Styles.link}>
        <img src={image} alt={`${text} image`} />
        <span>{text}</span>
      </NavLink>
    </>
  );
};

export default Navlink;
