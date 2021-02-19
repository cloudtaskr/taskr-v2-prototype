import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const contentStyles = {
  minHeight: "75vh",
  padding: "10vh 0",
  margin: "5vh 0",
  position: "relative",
};

const App = () => {
  return (
    <>
      <Navbar />
      <div style={contentStyles}>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path="/tasks" render={(props) => <Tasks {...props} />} />
          <Route exact path="/team" render={(props) => <Team {...props} />} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default App;
