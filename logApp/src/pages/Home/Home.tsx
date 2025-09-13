import React, { useState } from "react";
import Header from "../../pieces/Header/Header";
import Accueil from "../Accueil/";
import Formation from "../Formation";
import Apropos from "../Apropos";
import Contact from "../Contact";
const Home: React.FC = () => {
  return (
    <>
      <Accueil />
      <Formation />
      <Apropos />
      <Contact />
    </>
  );
};

export default Home;
