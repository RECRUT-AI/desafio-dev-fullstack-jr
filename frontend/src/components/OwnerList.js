import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../utils/api';

const OwnerList = () => {
  const [owners, setOwners] = useState([]);
  const history = useHistory();

  useEffect(() => {
    api.get('/dono')
      .then((response) => {
        setOwners(response.data);
      })
      .catch((error) => {
        console.error('Erro ao obter a lista de donos dos pets', error);
      });
  }, []);

  const handleGoToPets = () => {
    history.push('/pets');
  };

  return (
    <div className="bg-gray-100 p-4 mt-8">
      <h2 className="text-xl font-bold mb-4">Listagem de Donos de Pets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {owners.map((owner) => (
          <div key={owner.id} className="bg-white p-4 rounded shadow">
            <p>
              <strong>Nome: </strong> {owner.nome}
              <br />
              <strong>Telefone: </strong> {owner.telefone}
            </p>
          </div>
        ))}
      </div>
      <button  className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={handleGoToPets}>
        Voltar para a lista de Pets
      </button>
    </div>
  );
};

export default OwnerList;
