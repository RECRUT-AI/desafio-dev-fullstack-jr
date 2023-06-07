const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../database/connection');
const { petModel } = require('../../../src/model');
const { petsMockModel, newpetModel, 
  refreshPet } = require('./mocks/pets.model.mock');

describe('Model -> Testes de unidade do model de pets', function () {
  describe('Model -> Testes endpoint GET', function () {
  it('Listando todos os pets', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([petsMockModel]);
    // Act
    const result = await petModel.getAll();
    // Assert
    expect(result).to.be.deep.equal(petsMockModel);
  });

  it('Recuperando um produto a partir do seu id', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([[petsMockModel[1]]]);
    // Act
    const result = await petModel.getPetById(2);
    // Assert
    expect(result).to.be.deep.equal(petsMockModel[1]);
  });
});

  describe('Model -> Testes endpoint PUT', function () {
    it('Atualizando um produto', async function () {
      // Arrange
    sinon.stub(connection, 'execute').resolves([{ idpet: 1 }]);
    // Act
    const result = await petModel.updatePet(refreshPet);
    // Assert
    expect(result.idpet).to.equal(1);
    });
  });

    describe('Model -> Testes endpoint DELETE', function () {
    it('Excluindo um produto', async function () {
      // Arrange
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    // Act
    const result = await petModel.deletePet(2);
    // Assert
    expect(result.affectedRows).to.be.equal(1);
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});