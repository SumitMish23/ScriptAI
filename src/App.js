import React from "react";
import { Article, Brand, CTA,Whatscript, Feature, Navbar } from "./components";
import { Blog, Features, Footer, Header, Possibility } from "./containers";
import './App.css';


const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatscript/>
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
