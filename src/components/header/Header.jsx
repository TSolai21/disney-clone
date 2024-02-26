import React, { useEffect, useState } from "react";
import styles from "../header/header.module.css";
import { imageSources } from "../../imageSources/imageSources";
import Button from "../button/Button";
import { navdata } from "../../data/data";
import Navlink from "../Navlink/Navlink";
import { auth, provider } from "../../firebase";

import { signInWithPopup, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import userSlice from "../../redux/userSlice";
const Header = () => {
  const user = useSelector((state) => state.user);

  const [userData, setUserData] = useState(user);
  const dispatch = useDispatch();
  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;

        dispatch(
          userSlice.actions.setUser({
            name: displayName,
            email,
            photo: photoURL,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
    dispatch(userSlice.actions.setSignOut());
  };

  useEffect(() => {
    setUserData(user);

    console.log(user, "done");
  }, [user]);
  return (
    <>
      <header>
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

        {userData.name != "" ? (
          <>
            <img src={user.photo} className={styles.userImage} alt="user" />
            <Button
              onclick={handleLogOut}
              classname={styles.logout}
              text={"Logout"}
            />
          </>
        ) : (
          <Button
            onclick={handleAuth}
            classname={styles.login}
            text={"Login"}
          />
        )}
      </header>
    </>
  );
};

export default Header;
