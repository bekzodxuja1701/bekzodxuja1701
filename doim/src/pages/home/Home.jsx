import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import History from "../../components/History/History";
import Affair from "../../components/Affair/Affair";
import Gallery from "../../components/Gallery/Gallery";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <History />
      <Affair />
      <Gallery />
      <Footer />
    </div>
  );
}
