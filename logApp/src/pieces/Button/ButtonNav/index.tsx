import React from "react";
import "./ButtonNav.scss";

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className="ButtonNav" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
