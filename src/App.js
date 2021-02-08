
import './App.css';


import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { AddEmployee } from "./components/AddEmployee";
import { EditEmployee } from "./components/EditEmployee";


import "bootstrap/dist/css/bootstrap.min.css";
import {GlobalProvider} from "./context/GlobalState";

const App = () => {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddEmployee} />
            <Route path="/edit/:id" component={EditEmployee} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  )
}

export default App
