import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// Import CSS  k
import "./App.css"
// Import views
import Home from "./view/Home";
import AboutMe from "./view/AboutMe";
import Project from "./view/Project";
import Contact from "./view/Contact";
// Import component
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-me" component={AboutMe} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </BrowserRouter>
  );
};

export default App;