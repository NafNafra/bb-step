import React from "react";
import "./Link.scss";

type LinkProps = {
  text: string;
  onClick?: () => void;
};

const Link: React.FC<LinkProps> = ({ text, onClick }) => {
  return (
    <a className="Link" onClick={onClick}>
      {text}
    </a>
  );
};

export default Link;
