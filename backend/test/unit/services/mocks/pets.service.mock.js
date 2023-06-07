const correctPetIdMockService = {
  "idpet": 1,
  "nome": "Bethovem",
  "idade": 12,
  "tipo": "Cachorro",
  "raca": "Golden retriever",
  "id_dono": 1
};

const petsMockService = [
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
  }
];

const refreshPetUpdate = {
  "idpet": 1,
  "nome": "Bethovem",
  "idade": 12,
  "tipo": "Cachorro",
  "raca": "Golden retriever",
  "id_dono": 1
};

const newProductService = {
  name: 'computador',
};

module.exports = {
  correctPetIdMockService,
  petsMockService,
  newProductService,
  refreshPetUpdate,
};