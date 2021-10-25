import { BrowserRouter, Switch, Route } from "react-router-dom";
// Import views
import Home from "./view/Home";
import Project from "./view/Project";
import Contact from "./view/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;