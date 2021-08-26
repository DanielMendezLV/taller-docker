import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
import KRam from "./KRam";
import KProceso from "./KProceso";
import GraficaPieInfected from "./GraficaPieInfected";
import PorcentajePais from "./PorcentajePais";
import GraficoBarraVacunado from "./GraficoBarraVacunado";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/ram">
              <KRam></KRam>
            </Route>
            <Route exact path="/proceso">
              <KProceso></KProceso>
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails></BlogDetails>
            </Route>
            <Route path="/about/:id">
              <About />
            </Route>
            <Route path="/ppais">
              <PorcentajePais />
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

function About() {
  return (
    <div>
      <GraficaPieInfected />
      <br></br>
      <br></br>
      <br></br>
      <GraficoBarraVacunado />
      <hr />
    </div>
  );
}

export default App;
