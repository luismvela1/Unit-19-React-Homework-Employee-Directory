import React, { Component } from "react";
import EmployeeDirectory from "./pages/EmployeeDirectory";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component{
render() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path = "/" component = {EmployeeDirectory}/>
      </Switch>
      
    </div>
    </Router>
  );
}
}

export default App;