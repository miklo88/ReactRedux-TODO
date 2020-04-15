import React from "react";
// components
import Nav from "./Components/Nav_Footer/Nav";
import MainContent from "./Components/Landing/MainContent";
import Footer from "./Components/Nav_Footer/Footer";
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
