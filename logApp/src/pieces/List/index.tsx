import React from "react";
import "./ListIcon.scss";
import type { ReactNode } from 'react';


type ListProps = {
  text: string;
  icon?: string;
  onClick?: () => void;
};

const List: React.FC<ListProps> = ({ text, icon, onClick }) => {
  return (
    <li className="ListIcon" onClick={onClick}>
      <svg className="icon">
        <use href={`/icon.svg#${icon}`}></use>
      </svg>
      <span>{text}</span>
    </li>
  );
};

export default List;