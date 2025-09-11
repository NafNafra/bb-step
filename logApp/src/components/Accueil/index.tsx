import React from "react";
import "./Accueil.scss";
import type { ReactNode } from 'react';

import Header from './AccueilHeader/index'
import Intro from './AccueilIntro/index'

type AccueilProps = {
  children: ReactNode;
};

const Accueil: React.FC<AccueilProps> = ({ children }) => {
  return (
    <div className="Accueil">
      <Header/>
      <Intro/>
    </div>)
};

export default Accueil;
