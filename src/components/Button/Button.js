import React from "react";
import "./Button.scss";

const Button = props => {
  return (
    <div className={"button_general"} style={{ background: props.color }} onClick={() => props.onclick()}>
      {props.text}
    </div>
  );
};

Button.defaultProps = {
  color: "pink",
  text: "button",
  onclick: () => { }
};

export default Button;