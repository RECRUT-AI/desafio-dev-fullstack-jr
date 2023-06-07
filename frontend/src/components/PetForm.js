import React, { useState, useContext } from 'react';
import Context from "../../src/context/context";
import api from '../utils/api';

const PetForm = () => {
  const { pets, setPets } = useContext(Context);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [tipo, setTipo] = useState('');
  const [raca, setRaca] = useState('');
  const [donoNome, setDonoNome] = useState('');
  const [donoTelefone, setDonoTelefone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const petData = {
      pet: {
        nome,
        idade,
        tipo,
        raca,
      },
      dono: {
        nome: donoNome,
        telefone: donoTelefone,
      },
    };

    api.post('/pet', petData)
      .then((response) => {
        setPets([...pets, response.data]);
        setNome('');
        setIdade('');
        setTipo('');
        setRaca('');
        setDonoNome('');
        setDonoTelefone('');
      })
      .catch((error) => {
        console.error('Erro ao criar o pet:', error);
      });
  };

  const isFormValid = () => {
    return (
      nome !== '' &&
      idade !== '' &&
      tipo !== '' &&
      raca !== '' &&
      donoNome !== '' &&
      donoTelefone !== ''
    );
  };

  return (
    <div className="bg-gray-100 p-4 mt-8">
      <h2 className="text-xl font-bold mb-4">Cadastrar novo pet</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            className="border border-gray-300 rounded p-2 w-full text-center"
            required
          />
        </label>
        <label className="block mb-4">
          Idade:
          <input
            type="text"
            value={idade}
            onChange={(event) => setIdade(event.target.value)}
            className="border border-gray-300 rounded p-2 w-full text-center"
            required
          />
        </label>
        <label className="block mb-4">
          Tipo:
          <select
            value={tipo}
            onChange={(event) => setTipo(event.target.value)}
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
            value={raca}
            onChange={(event) => setRaca(event.target.value)}
            className="border border-gray-300 rounded p-2 w-full text-center"
            required
          />
        </label>
        <label className="block mb-4">
          Nome do Dono:
          <input
            type="text"
            value={donoNome}
            onChange={(event) => setDonoNome(event.target.value)}
            className="border border-gray-300 rounded p-2 w-full text-center"
            required
          />
        </label>
        <label className="block mb-4">
          Telefone do Dono:
          <input
            type="text"
            value={donoTelefone}
            onChange={(event) => setDonoTelefone(event.target.value)}
            className="border border-gray-300 rounded p-2 w-full text-center"
            required
          />
        </label>

        {!isFormValid() && <p className="text-red-500 mb-2">Preencha todos os campos corretamente.</p>}

        <button
          type="submit"
          disabled={!isFormValid()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Adicionar Pet
        </button>
      </form>
    </div>
  );
};

export default PetForm;