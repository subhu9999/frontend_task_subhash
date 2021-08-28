import React from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import LineBreak from "./components/LineBreak";
import LoginAlt from "./components/LoginAlt";

function App() {
  return (
    <div className="App">
      <div
        className="flex flex-col items-center bg-white m-8 p-8"
        style={{ minWidth: "60%" }}
      >
        <Header />
        <LoginAlt />
        <LineBreak />

        <Form/>
      </div>
    </div>
  );
}

export default App;
