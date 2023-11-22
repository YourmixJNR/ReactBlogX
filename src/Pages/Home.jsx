import React from "react";
import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";
import PostContents from "../Components/PostContents";
import HeroSection from "../Components/HeroSection";
// import Login from "../Auth/Login";

const Home = () => {
  return (
    <div>
      <Header />
      {/* <Login /> */}
      <HeroSection />
      <PostContents />
      <Footer />
    </div>
  );
};

export default Home;
