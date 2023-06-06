import React, { useState } from 'react';

function PetForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [type, setType] = useState('');
  const [breed, setBreed] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crie um objeto com os dados do animal de estimação
    const petData = {
      name,
      age,
      type,
      breed,
      ownerName,
      ownerPhone,
    };

    // Faça uma requisição POST para enviar os dados do animal de estimação ao backend
    // Lembre-se de tratar o caso de sucesso e erro

    // Exemplo de requisição usando fetch:
    fetch('/api/pets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(petData),
    })
      .then((response) => {
        if (response.ok) {
          // O animal de estimação foi adicionado com sucesso
          // Redefina os campos do formulário
          setName('');
          setAge('');
          setType('');
          setBreed('');
          setOwnerName('');
          setOwnerPhone('');
        } else {
          // Houve um erro ao adicionar o animal de estimação
          // Lide com o erro adequadamente
        }
      })
      .catch((error) => {
        // Houve um erro de conexão com o servidor
        // Lide com o erro adequadamente
      });
  };

  return (
    <div>
      <h2>Adicionar Animal de Estimação</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Idade:
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br />
        <label>
          Tipo:
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </label>
        <br />
        <label>
          Raça:
          <input
            type="text"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </label>
        <br />
        <label>
          Nome do Dono:
          <input
            type="text"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Telefone do Dono:
          <input
            type="text"
            value={ownerPhone}
            onChange={(e) => setOwnerPhone(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default PetForm;
