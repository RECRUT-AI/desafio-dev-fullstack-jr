import React, { useState, useEffect } from 'react';
import api from "../../src/utils/api";

function PetList() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    api.get("/pet")
    .then((response) => setPets(response.data))
    .catch((error) => {
      console.error("Ocorreu um erro na requisição:", error);
    }
    );
  }, []);

    // Exemplo de requisição usando fetch:
    // fetch('/api/pets')
    //   .then((response) => response.json())
    //   .then((data) => setPets(data));
  return (
    <div>
      <h2>Lista de Animais de Estimação</h2>
      { console.log( pets)}
      {pets.map((pet) => (
        <div key={pet.idpet}>
          <h3>{pet.nome}</h3>
          <p>Idade: {pet.idade}</p>
          <p>Tipo: {pet.tipo}</p>
          <p>Raça: {pet.raca}</p>
          <p>Dono: {pet.id_dono}</p>
          <p>Contato: {pet.ownerPhone}</p>
        </div>
      ))}
    </div>
  );
}

export default PetList;
