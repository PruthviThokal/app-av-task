import React from "react";
import ConnectionPage from "./pages/ConnectionPage";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={ConnectionPage} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </>
  );
}

export default App;
