import React, { useState, useContext } from 'react';
import Context from "../../src/context/context";
import api from '../utils/api';

const PetForm = () => {
  const { pets, setPets } = useContext(Context);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [type, setType] = useState('');
  const [breed, setBreed] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const petData = {
      name,
      age,
      type,
      breed,
      owner: {
        name: ownerName,
        phone: ownerPhone,
      },
    };

    api.post('/pets', petData)
      .then((response) => {
        console.log('Pet criado com sucesso:', response.data);
        // Limpar os campos do formulário
        console.log(response.data)
        setPets([...pets, response.data]);
        setName('');
        setAge('');
        setType('');
        setBreed('');
        setOwnerName('');
        setOwnerPhone('');
      })
      .catch((error) => {
        console.error('Erro ao criar o pet:', error);
      });
  };

  return (
    <div className="bg-gray-100 p-4 mt-8">
      <h2 className="text-xl font-bold mb-4">Cadastrar novo pet</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          Nome:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="border border-gray-300 rounded p-2 w-full text-center"
            required
          />
        </label>
        <label className="block mb-4">
          Idade:
          <input
            type="text"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            className="border border-gray-300 rounded p-2 w-full text-center"
            required
          />
        </label>
        <label className="block mb-4">
          Tipo:
          <select
            value={type}
            onChange={(event) => setType(event.target.value)}
            className="border border-gray-300 rounded p-2 w-full text-center"
            required
          >
            <option value="">Selecione</option>
            <option value="gato">Gato</option>
            <option value="cachorro">Cachorro</option>
          </select>
        </label>
        <label className="block mb-4">
          Raça:
          <input
            type="text"
            value={breed}
            onChange={(event) => setBreed(event.target.value)}
            className="border border-gray-300 rounded p-2 w-full text-center"
            required
          />
        </label>
        <label className="block mb-4">
          Nome do Dono:
          <input
            type="text"
            value={ownerName}
            onChange={(event) => setOwnerName(event.target.value)}
            className="border border-gray-300 rounded p-2 w-full text-center"
            required
          />
        </label>
        <label className="block mb-4">
          Telefone do Dono:
          <input
            type="text"
            value={ownerPhone}
            onChange={(event) => setOwnerPhone(event.target.value)}
            className="border border-gray-300 rounded p-2 w-full text-center"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Adicionar Pet
        </button>
      </form>
    </div>
  );
};

export default PetForm;