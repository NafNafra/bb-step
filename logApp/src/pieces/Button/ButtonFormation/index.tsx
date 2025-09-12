import React from "react";
import "./ButtonFormation.scss";


type FormationProps = {
  text: string;
  icon?: string;
  onClick?: () => void;
};

const List: React.FC<FormationProps> = ({ text, icon, onClick }) => {
  return (
    <button className="ButtonFormation" onClick={onClick}>
      <span>{text}</span>
      <svg className="icon">
        <use href={`/icon.svg#${icon}`}></use> {/* fleche */}
      </svg>
    </button>
  );
};

export default List;