import React from "react";
import "./Panel.scss";

type PanelProps = {
  alt?: string;
  src: string;
};

const Panel: React.FC<PanelProps> = ({  src, alt }) => {
  return (
    <img
      className="custom-input"
      src={src}
      alt={alt}
    />
  );
};

export default Panel;
