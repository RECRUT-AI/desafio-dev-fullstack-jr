import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from "../../src/context/context";
import api from "../../src/utils/api";
import PetForm from './PetForm';

function PetList() {
  const { pets,
    setPets,
    editingPet,
    setEditingPet } = useContext(Context);
  const [filter, setFilter] = useState('');
  const history = useHistory();

  const fetchPets = () => {
    api.get("/pet")
    .then((response) => setPets(response.data))
    .catch((error) => {
      console.error("Ocorreu um erro na requisição", error);
    });
  };

  const handleDeletePet = (idpet) => {
    api.delete(`/pet/${idpet}`)
      .then(() => fetchPets())
      .catch((error) => {
        console.error("Ocorreu um erro na requisição", error);
      });
  };

  const filterPets = () => {
    const filterLowercase = filter.toLowerCase(); 
    if (filterLowercase === 'gato') {
      return pets.filter((pet) => pet.tipo.toLowerCase() === 'gato'); 
    } else if (filterLowercase === 'cachorro') {
      return pets.filter((pet) => pet.tipo.toLowerCase() === 'cachorro');
    } else {
      return pets;
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleGoToOwners = () => {
    history.push('/pets/owners');
  };

  const handleEditPet = (pet) => {
    console.log(pet);
    setEditingPet(pet);
    history.push(`/pets/${pet.idpet}/edit`);
    console.log(editingPet)
  };
  

  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <div className='bg-gray-100 py-8'>
    <h2 className="text-2xl font-bold mb-4">Lista de Animais de Estimação</h2>
    <select value={filter} onChange={handleFilterChange}>
      <option value="">Todos</option>
      <option value="gato">Gato</option>
      <option value="cachorro">Cachorro</option>
    </select>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {filterPets().map((pet, index) => (
        <div 
          className="bg-white rounded-lg shadow-md p-4 mb-4"
          key={pet.idpet}
        >
          <h3 className="text-lg font-semibold">{pet.nome}</h3>
          <p className="text-gray-600">Idade: {pet.idade}</p>
          <p className="text-gray-600">Tipo: {pet.tipo}</p>
          <p className="text-gray-600">Raça: {pet.raca}</p>
          <p className="text-gray-600">Dono ID: {pet.id_dono}</p>
          <p className="text-gray-600">Para mais informações do dono, clique no botão "Informação dos donos de pets"</p>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => handleDeletePet(pet.idpet)}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mr-2"
            >
              Excluir
            </button>
            <button
              onClick={() => handleEditPet(pet)}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Editar
            </button>
          </div>
        </div>
      ))}
      {filterPets().length % 2 === 1 && (
        <div className="bg-white rounded-lg shadow-md p-4 mb-4"></div>
      )}
    </div>
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleGoToOwners}
      >
        Informação dos donos de Pets
      </button>
      <PetForm />
    </div>
  </div>
  );
}

export default PetList;
