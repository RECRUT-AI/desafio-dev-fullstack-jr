const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../database/connection');
const { petModel } = require('../../../src/model');
const { petsMockModel, newpetModel, 
  refreshProduct } = require('./mocks/pets.model.mock');

describe('Model -> Testes de unidade do model de pets', function () {
  describe('Model -> Testes endpoint GET', function () {
  it.only('Listando todos os pets', async function () {
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
    sinon.stub(connection, 'execute').resolves([{ id: 1 }]);
    // Act
    const result = await petModel.updateProduct(refreshProduct);
    // Assert
    expect(result.id).to.equal(1);
    });
  });

    describe('Model -> Testes endpoint DELETE', function () {
    it('Excluindo um produto', async function () {
      // Arrange
    sinon.stub(connection, 'execute').resolves([1]);
    // Act
    const result = await petModel.deleteProduct(1);
    // Assert
    expect(result).to.equal(1);
    });
  });

  describe('Model -> Testes endpoint POST', function () {
    it('Cadastrando um novo produto', async function () {
      // Arrange
    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);
    // Act
    const result = await petModel.createProduct(newpetModel);
    // Assert
    expect(result).to.equal(42);
    });
});

  afterEach(function () {
    sinon.restore();
  });
});