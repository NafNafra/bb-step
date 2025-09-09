import React from "react";
import "./Header.scss";

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return <h1 className="Header">{title}</h1>;
};

export default Header;
