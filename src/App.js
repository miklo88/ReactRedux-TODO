import React from "react";
// styles
import "./App.scss";
// components
import Nav from "./components/nav&footer/Nav";
import MainContent from "./components/landing/MainContent";
import Footer from "./components/nav&footer/Footer";

function App() {
  return (
    <div className='App'>
      <Nav />
      <MainContent />
      {/* <TodoCard /> */}
      <Footer />
    </div>
  );
}

export default App;
