import React, { useState } from "react";
import Header from "../pieces/Header/Header";
import Container from "../components/Container/Container";
// import Paragraph from "../components/Paragraph/Paragraph";
import Users from "./Users/Users";

const Home: React.FC = () => {
  return (
    <Container>
      <Header title='Holla, Welcome Back' />
      <Users />
    </Container>
  );
};

export default Home;
