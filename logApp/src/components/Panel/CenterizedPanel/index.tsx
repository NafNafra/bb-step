import React from "react";
import "./Panel.scss";

type PanelProps = {
  header: string;
  texte: string;
};

const Panel: React.FC<PanelProps> = ({header, texte}) => {
  return (
    <>
      <div className="PIntro">
        <h2>{header}</h2>
        <p>{texte}</p>
      </div>
    </>
  );
};

export default Panel;
