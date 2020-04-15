import React from "react";
// components
import Nav from "./components/nav_footer/nav";
import MainContent from "./components/landing/main-content";
import Footer from "./components/nav_footer/footer";
//styles
import "./app.scss";

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
