import React from "react";
import AddNote from "./components/users/AddNote";
import Header from "./components/users/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import ListNote from "./components/users/ListNote";
import Footer from "./components/users/Footer";


function App() {
 

  return (
    <>
      <Header/>
      <AddNote/>
      <ListNote/>
      <Footer/>
    </>
  );
}

export default App;
