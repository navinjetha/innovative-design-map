import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Gateway } from "./pages/Gateway";
import Category from "./pages/Category";
import Map from "./pages/Map";
// import MarkPointOnMap from "./components/MarkPointOnMap"
import Navbar from "./components/Navbar";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ClassificationProvider from "./store/ClassificationProvider";

function App() {
  return (
    <ClassificationProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Gateway} />
          <Route path="/Category" component={Category} />
          <Route path="/Map" component={Map} />
          <Route path="/ProjectPage" component={ProjectPage} />
        </Switch>
        <Navbar />
      </Router>
    </ClassificationProvider>
  );
}

export default App;
