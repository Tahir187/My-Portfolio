import React from "react";
import Navbar from "./components/Header/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Services from "./components/Service/Services";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Work/>
      <Contact/>
    </>
  );
};

export default App;
