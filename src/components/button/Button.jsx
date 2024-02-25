import React from "react";

function Button({ name, type, classname, text, onclick }) {
  return (
    <>
      <button onClick={onclick} className={classname}>
        {text}
      </button>
    </>
  );
}

export default Button;
