const mockNotFoundPet = {
  type: 404,
  message: 'Pet not found',
  };

const petsMockController = [
    {
      "idpet": 1,
      "nome": "Bethovem",
      "idade": 12,
      "tipo": "Cachorro",
      "raca": "Golden retriever",
      "id_dono": 1
    },
    {
      "idpet": 2,
      "nome": "Rex",
      "idade": 2,
      "tipo": "Cachorro",
      "raca": "Viralata",
      "id_dono": 1
    },
    {
      "idpet": 3,
      "nome": "Mel",
      "idade": 4,
      "tipo": "Gato",
      "raca": "Himalaia",
      "id_dono": 2
    },
    {
      "idpet": 4,
      "nome": "Tesouro",
      "idade": 4,
      "tipo": "Gato",
      "raca": "Ashera",
      "id_dono": 4
    },
    {
      "idpet": 5,
      "nome": "Tafarel",
      "idade": 8,
      "tipo": "Cachorro",
      "raca": "Viralata",
      "id_dono": 4
    },
    {
      "idpet": 8,
      "nome": "teste",
      "idade": 12,
      "tipo": "cachorro",
      "raca": "goldem",
      "id_dono": 6
    },
    {
      "idpet": 9,
      "nome": "erweewe",
      "idade": 12,
      "tipo": "cachorro",
      "raca": "goldem",
      "id_dono": 7
    }
  ];

const mockNewPetController = {
  "pet": {
    "nome": "erweewe",
    "idade": "12",
    "tipo": "cachorro",
    "raca": "goldem"
  },
  "dono": {
    "nome": "douglas",
    "telefone": "8198765434"
  }
};

module.exports = { 
  mockNotFoundPet,
  petsMockController,
  mockNewPetController,
};