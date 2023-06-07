import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api from "../../src/utils/api";

const EditPet = () => {
  const { idpet } = useParams(); 
  const history = useHistory();
  const [editedPet, setEditedPet] = useState({
    nome: '',
    idade: '',
    tipo: '',
    raca: '',
    dono: '',
    telefone: ''
  });

  useEffect(() => {
    // Busca as informações do pet com o ID fornecido
    api.get(`/pet/${idpet}`)
      .then((response) => {
        setEditedPet(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar as informações do pet:", error);
      });
  }, [idpet]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedPet((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Envia a requisição PUT para atualizar as informações do pet
    api.put(`/pet/${idpet}`, editedPet)
      .then(() => {
        history.push('/pets'); // Redireciona para a página de listagem de pets
      })
      .catch((error) => {
        console.error("Erro ao atualizar as informações do pet:", error);
      });
  };

  return (
    <div className="bg-gray-100 p-4 mt-8">
      <h2 className="text-xl font-bold mb-4">Editar Pet</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block">Nome:</label>
          <input
            type="text"
            name="name"
            value={editedPet.name}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block">Idade:</label>
          <input
            type="text"
            name="age"
            value={editedPet.age}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block">Tipo:</label>
          <input
            type="text"
            name="type"
            value={editedPet.type}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block">Raça:</label>
          <input
            type="text"
            name="breed"
            value={editedPet.breed}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block">Nome do Dono:</label>
          <input
            type="text"
            name="ownerName"
            value={editedPet.ownerName}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block">Telefone do Dono:</label>
          <input
            type="text"
            name="ownerPhone"
            value={editedPet.ownerPhone}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Salvar</button>
      </form>
    </div>
  );
};

export default EditPet;
