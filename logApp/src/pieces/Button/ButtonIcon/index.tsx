import React from "react";
import "./ButtonIcon.scss";
import type { ReactNode } from 'react';


type ButtonProps = {
  classes:string;
  icon: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ icon, classes="", onClick }) => {
  return (
    <button className="ButtonIcon" onClick={onClick}>
      <svg className={`icon ${classes}`} >
        <use href={`/icon.svg#${icon}`}></use>
      </svg>
    </button>
  );
};

export default Button;
