import React from "react";
import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";
import PostContents from "../Components/PostContents";
import HeroSection from "../Components/HeroSection";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <PostContents />
      <Footer />
    </div>
  );
};

export default Home;
