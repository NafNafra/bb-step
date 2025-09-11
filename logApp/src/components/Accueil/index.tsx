import React from "react";
import "./Accueil.scss";
import type { ReactNode } from 'react';

type AccueilProps = {
  children: ReactNode;
};

const Accueil: React.FC<AccueilProps> = ({ children }) => {
  return <div className="Accueil">{children}</div>;
};

export default Accueil;
