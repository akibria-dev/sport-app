// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Route, Routes } from "react-router";
import "./App.css";
import Sport from "../src/Sport/Sport";
import Football from "./Football/Football";
import Cricket from "./Cricket/Cricket";
import Rugby from "./Rugby/Rugby";
import Formula1 from "./Formula1/Formula1";
import Tennis from "./Tennis/Tennis";
import Golf from "./Golf/Golf";
import Boxing from "./Boxing/Boxing";
import Athletics from "./Athletics/Athletics";
import SportsList from "./SportsList/SportsList";
import Favourite from "./Favourite/Favourite";
import { Home } from "./pages/Home";
import { Login } from "./Login";
import { Register } from "./Register";
function App() {
  return (
    <div className="App">
      <Routes></Routes>
      <Routes>
        <Route path="/" element={<Sport />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/football" element={<Football />}></Route>
        <Route path="/cricket" element={<Cricket />}></Route>
        <Route path="/rugby" element={<Rugby />}></Route>
        <Route path="/formula1" element={<Formula1 />}></Route>
        <Route path="/tennis" element={<Tennis />}></Route>
        <Route path="/golf" element={<Golf />}></Route>
        <Route path="/boxing" element={<Boxing />}></Route>
        <Route path="/athletics" element={<Athletics />}></Route>
        {/* <Route path="/fav" element={<SportsList />}></Route> */}
        <Route path="/favourite" element={<Favourite />}></Route>
      </Routes>
    </div>
  );
}

export default App;
