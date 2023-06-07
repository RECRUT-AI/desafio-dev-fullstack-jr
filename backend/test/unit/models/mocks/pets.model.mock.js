const petsMockModel = [
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
    "raca": "viralata",
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
    "nome": "Billy",
    "idade": 12,
    "tipo": "Gato",
    "raca": "Ragdoll",
    "id_dono": 3
  }
];

const newPetModel = {
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

const refreshPet = {
  idpet: 1,
  nome: 'Martelo do Batman',
  idade: 12,
  tipo: 'cachorro',
  raca: 'viralata'
};

const addPet = {
    "idpet": 8,
    "nome": "teste",
    "idade": 12,
    "tipo": "cachorro",
    "raca": "goldem",
    "id_dono": 6
};


module.exports = {
  petsMockModel,
  newPetModel,
  refreshPet,
  addPet,
};