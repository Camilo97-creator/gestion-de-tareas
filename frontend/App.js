import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TaskList from "./components/TaskList";
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/tasks" component={TaskList} />
        <Route exact path="/" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
