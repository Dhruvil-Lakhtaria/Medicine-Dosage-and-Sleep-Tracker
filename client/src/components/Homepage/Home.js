import React from "react";
import Navbar from "./Navbar";
import TopSection from "./TopSection";
import MainSection from "./MainSection";
import Footer from "./Footer";
import "../../css/Homepage.css"
const Home = () => {
  return (
    <div className="homepage">
      <Navbar />
      <TopSection />
      <MainSection />
      <Footer />
    </div>
  );
};

export default Home;
