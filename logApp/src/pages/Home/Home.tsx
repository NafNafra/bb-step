import React, { useState } from "react";
import Header from "../../pieces/Header/Header";
import Accueil from "../../components/Accueil";
// import Paragraph from "../components/Paragraph/Paragraph";
import Users from "../Users/Users";

const Home: React.FC = () => {
  return (
    <Accueil>
      <Users />
    </Accueil>
  );
};

export default Home;
