import React, { useState } from "react";
import Header from "../../pieces/Header/Header";
import Accueil from "../Accueil/";
import Formation from "../Formation";

const Home: React.FC = () => {
  return (
    <>
      <Accueil />
    <Formation />
    </>
  );
};

export default Home;
