import React from "react";
import { Helmet } from "react-helmet-async";
import "./home.css";
// Home Components
import Carousel from "../../assets/components/carousel";
import Content from "./content";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Cyber security awarness
        </title>
      </Helmet>
      <Carousel />
      <Content />

    </>
  );
};
export default Home;
