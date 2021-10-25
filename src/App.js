import { BrowserRouter, Switch, Route } from "react-router-dom";
// Import CSS
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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-me" component={AboutMe} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;