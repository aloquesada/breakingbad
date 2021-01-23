import { BrowserRouter, Switch, Route } from "react-router-dom";
import Characters                       from "./components/Characters";
import Deaths                           from "./components/Deaths";
import Episodes                         from "./components/Episodes";
import NavBar                           from "./components/NavBar";
import './App.scss';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <NavBar />
          <Switch>
            <Route path="/episodes">
              <div className="Wrapper">
                <Episodes />
              </div>
            </Route>
            <Route path="/">
              <div className="Wrapper">
                <Characters />
                <Deaths />
              </div>
            </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
