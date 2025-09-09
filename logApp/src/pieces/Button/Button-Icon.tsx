import React from "react";
import "./Button-Icon.scss";
import type { ReactNode } from 'react';


type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className="Button-Icon" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
