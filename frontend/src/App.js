import React, { useState }  from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './tailwind.css';
import './App.css';
import Context from "./context/context";
import PetList from './components/PetList';
import PetEdit from './components/EditPet';
import OwnerList from './components/OwnerList'

function App() {
  const [pets, setPets] = useState([]);
  const [editingPet, setEditingPet] = useState();
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Context.Provider
            value={{
              pets,
              setPets,
              editingPet,
              setEditingPet,
            }}
          >
            <Route exact path="/pets" component={ PetList } />
            <Route exact path="/pets/:idpet/edit" component={ PetEdit } />
            <Route exact path="/pets/owners" component={ OwnerList } />
          </Context.Provider>
        </Switch>
      </BrowserRouter>  

    </div>
  );
}

export default App;

