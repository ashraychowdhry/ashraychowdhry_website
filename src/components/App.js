import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import { Switch, Route } from "react-router-dom";
import PageNotFoundPage from "./PageNotFoundPage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route component={PageNotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
