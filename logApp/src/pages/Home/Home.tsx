import React, { useState } from "react";
import Header from "../../pieces/Header/Header";
import Container from "../../components/Container";
// import Paragraph from "../components/Paragraph/Paragraph";
import Users from "../Users/Users";

const Home: React.FC = () => {
  return (
    <Container>
      <Users />
    </Container>
  );
};

export default Home;
