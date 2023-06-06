import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Context from "./context/context";
import Feiticos from "./pages/pets/pets";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Context.Provider
          >
            <Route path="/pet" component={Feiticos} />
          </Context.Provider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
