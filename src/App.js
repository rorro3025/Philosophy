import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Inicio";
import History from "./components/History";
import MainCharacters from "./components/MainCharacters";
import Footer from "./components/Footer";
import Beauty from "./components/beauty";
import Ubication from "./components/Ubication";
import Contact from "./components/Contact";
import { initfb } from "./fsconfig";
import Educacion from './components/Museum'

function App() {
  initfb.analytics();
 
  return (
    <div> 
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/history" component={History}></Route>
          <Route path="/mainCharacters" component={MainCharacters}></Route>
          <Route path="/beauty" component={Beauty}></Route>
          <Route path="/ubication" component={Ubication}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/education" component={Educacion}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
