import React from "react";
import "./Button-Nav.scss";

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className="Button-Nav" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
