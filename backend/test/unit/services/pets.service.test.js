const { expect } = require('chai');
const sinon = require('sinon');

const { petService } = require('../../../src/service');
const { petModel } = require('../../../src/model');
const { petsMockService, correctPetIdMockService, newPetModel, refreshPetUpdate } = require('./mocks/pets.service.mock');

describe('Service -> Verificando service pet', function () {
  describe('GET - listagem de todos os pets', function () {
    it('Retorna lista completa dos pets', async function () {
      // Arrange
      sinon.stub(petModel, 'getAll').resolves(petsMockService);
      // Act
      const result = await petService.getAll();
      // Assert
      expect(result.type).to.be.equal(null);
      expect(result.message).to.deep.equal(petsMockService);
    });
  });

  describe('GET- listagem de pet especifico', function () {
    it('Falhando se o id do pet não existe', async function () {
       // Arrange
      sinon.stub(petModel, 'getPetById').resolves(undefined);
      // Act
      const result = await petService.getPetById(9999);
      // Assert
      expect(result.type).to.equal(404);
      expect(result.message).to.equal('Pet not found');
    });
  
    it('Retornando o id encontrado com sucesso', async function () {
      // Arrange
      sinon.stub(petModel, 'getPetById').resolves(correctPetIdMockService);
      // Act
      const result = await petService.getPetById(1);
      // Assert
      expect(result.message).to.be.deep.equal(correctPetIdMockService);
    });
  });

  describe('POST - Cadastro de um pet', function () {
    it('Com informações válidas', async function () {
      // arrange
      sinon.stub(petModel, 'petCriated').resolves(4);
      sinon.stub(petModel, 'getPetById').resolves(petsMockService[3]);
      
      // act
      const result = await petService.petCriated(newPetModel);

      // assert
      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal(petsMockService[3]);
    });
  });

  describe('PUT - Atualização de um pet', function () {
    it('Com informações válidas', async function () {
      // arrange
      sinon.stub(petModel, 'updatePet').resolves();
      sinon.stub(petModel, 'getPetById').resolves(correctPetIdMockService);
      
      // act
      const result = await petService.updatePet(3, 'PetX', 2, 'cachorro', 'goldem');
      // assert
      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal(refreshPetUpdate);
    });

  });

  describe('DELETE - Excluindo um pet', function () {
    it('Com informações válidas', async function () {
      // arrange
      sinon.stub(petModel, 'getPetById').resolves({ id: 2, name: 'Martelo de Thor' });
      sinon.stub(petModel, 'deletePet').resolves();
      
      // act
      const result = await petService.deletePet(1);

      // assert
      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal('Deleted pet');
    });

    it('Com informações não enviadas', async function () {
      // arrange
      sinon.stub(petModel, 'getPetById').resolves(undefined);
      sinon.stub(petModel, 'deletePet').resolves();
      
      // act
      const result = await petService.deletePet(undefined);

      // assert
      expect(result.type).to.equal(404);
      expect(result.message).to.deep.equal('Pet not found');
    });
  });
  afterEach(function () {
    sinon.restore();
  });
});