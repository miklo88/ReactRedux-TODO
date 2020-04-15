import React from "react";
// components
import Nav from "./components/nav_footer/Nav";
import MainContent from "./components/landing/MainContent";
import Footer from "./components/nav_footer/Footer";
// styles
import "./App.scss";

function App() {
  return (
    <div className='App'>
      <Nav />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
