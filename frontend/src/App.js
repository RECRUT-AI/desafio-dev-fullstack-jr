import React from 'react';
import PetList from './components/PetList';
import PetForm from './components/PetForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Petshop</h1>
      <PetList />
      <PetForm />
    </div>
  );
}

export default App;

