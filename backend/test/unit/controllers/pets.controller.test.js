const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const chai = require('chai');

chai.use(sinonChai);

const { expect } = chai;

const { petService } = require('../../../src/service');
const { petController } = require('../../../src/controller');
const { mockNotFoundPet, petsMockController, mockNewPetController } = require('./mocks/pets.controller.mock');

describe('Controller -> Testando Pets Controller', function () {
  describe('GET -Procura de pet com id inexistente e existente', function () {
    it('PetId inexistente status 404 e mensagem pet not found', async function () {
     // Arrange
      const res = {};
      const req = { params: { petid: 9999 } };
      sinon.stub(petService, 'getPetById').resolves(mockNotFoundPet);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      // Act

      await petController.getPetById(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: 'Pet not found' });
    });
    it('petId existente status 200 e mensagem do produto', async function () {
     // AAA
     // Arrange

     const res = {};
     const req = { params: { petid: 1 } };

     res.status = sinon.stub().returns(res);
     res.json = sinon.stub().returns();

     sinon.stub(petService, 'getPetById').resolves({ type: null, message: petsMockController[0] });

     await petController.getPetById(req, res);

     expect(res.status).to.have.been.calledWith(200);
     expect(res.json).to.have.been.calledWith({  "idpet": 1,
     "nome": "Bethovem",
     "idade": 12,
     "tipo": "Cachorro",
     "raca": "Golden retriever",
     "id_dono": 1 });
    });
  });

  describe('GET - Listagem dos pets', function () {
    it('Lista todos os pets', async function () {
     // Arrange
      const res = {};
      const req = {};
      sinon.stub(petService, 'getAll').resolves({ type: null, message: petsMockController });

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      // Act

      await petController.getAll(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(petsMockController);
    });

  });

  describe('Controller -> Testes endpoint POST', function () {
    it('Cria um novo pet, com informações corretas', async function () {
     // Arrange
      const res = {};
      const req = { body: mockNewPetController };
      sinon.stub(petService, 'petCriated')
      .resolves({ type: null, message: {
        "idpet": 9,
        "nome": "erweewe",
        "idade": 12,
        "tipo": "cachorro",
        "raca": "goldem",
        "id_dono": 7
      } });

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      // Act

      await petController.petCriated(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(petsMockController[6]);
    });
  });

  describe('Controller -> Testes endpoint DELETE', function () {
    it('Deleta um pet com sucesso', async function () {
     // Arrange
      const res = {};
      const req = { params: { petid: 1 }  };
      sinon.stub(petService, 'deletePet')
      .resolves({ type: null, message: null });

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      // Act

      await petController.deletePet(req, res);

      expect(res.status).to.have.been.calledWith(204);
    });

    it('Deleta um produto que não existe', async function () {
      // Arrange
       const res = {};
       const req = { params: { petid: 999 }};
       sinon.stub(petService, 'deletePet')
       .resolves({ type: 404, message: 'Pet not found' });
 
       res.status = sinon.stub().returns(res);
       res.json = sinon.stub().returns();
       // Act
 
       await petController.deletePet(req, res);
 
       expect(res.status).to.have.been.calledWith(404);
       expect(res.json).to.have.been.calledWith({ message: 'Pet not found'});
     });
  });

  describe('Controller -> Testes endpoint PUT', function () {
    it('Atualiza um pet', async function () {
     // Arrange
      const res = {};
      const req = { params: { petid: 1 },
        body: {
          "nome": "Bethovem",
          "idade": 12,
          "tipo": "Cachorro",
          "raca": "Golden retriever",
        },
 };
      sinon.stub(petService, 'updatePet')
      .resolves({ type: null,
        message: {
          "idpet": 1,
          "nome": "Bethovem",
          "idade": 12,
          "tipo": "Cachorro",
          "raca": "Golden retriever",
          "id_dono": 1
        } });

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      // Act

      await petController.updatePet(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith({
        "idpet": 1,
        "nome": "Bethovem",
        "idade": 12,
        "tipo": "Cachorro",
        "raca": "Golden retriever",
        "id_dono": 1
      });
    });

    it('Atualiza um produto incorretamente', async function () {
      // Arrange
       const res = {};
       const req = { params: { productId: 999 },
         body: {
           nome: 'PetX',
         },
  };
       sinon.stub(petService, 'updatePet')
       .resolves({ type: 404,
         message: 'Pet not found' });
 
       res.status = sinon.stub().returns(res);
       res.json = sinon.stub().returns();
       // Act
 
       await petController.updatePet(req, res);
 
       expect(res.status).to.have.been.calledWith(404);
       expect(res.json).to.have.been.calledWith({  message: 'Pet not found'});
     });
  });
  
  afterEach(function () {
    sinon.restore();
  });
});