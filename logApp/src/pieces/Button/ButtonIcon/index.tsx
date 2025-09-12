import React from "react";
import "./ButtonIcon.scss";
import type { ReactNode } from 'react';


type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className="ButtonIcon" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
