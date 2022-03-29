import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import { Hooks } from "./routes/HookUseState2";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/hook">
          <Hooks />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
