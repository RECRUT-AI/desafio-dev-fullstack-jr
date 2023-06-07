const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const { invalidPhoneNumber } = require('../../../src/middlewares/invalidPhoneNumber');

const { expect } = chai;

chai.use(sinonChai);

describe('Testando Middleware - InvalidPhoneNumber', function () {
  describe('Body enviados', function () {
    it('Com informações válidas, next funcionando', async function () {
     // AAA
     const req = { body: {
      "pet": {
        "nome": "teste",
        "idade": "12",
        "tipo": "cachorro",
        "raca": "goldem"
      },
      "dono": {
        "nome": "douglas",
        "telefone": "819876543477"
      }
    } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub()
    };
     const next = sinon.stub().returns();

     invalidPhoneNumber(req, res, next);

    expect(next).to.have.been.calledWith();
    });

    it('Inválidos: Deve retornar mensagem "telefone is required" e status 400', async function () {
     // AAA
     const res = {};
     const req = { body: { dono: { nome: 'luiz'} }};
     const next = sinon.stub().returns();
    
     res.status = sinon.stub().returns(res);
     res.json = sinon.stub().returns();

     invalidPhoneNumber(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({
      message: '"Telefone" is required',
    });
    });

    it(`Inválidos: Deve retornar mensagem telefone length must be at least 11 characters long
     e status 422`, async function () {
      // AAA
      const res = {};
      const req = { body: { dono: { nome: 'luiz', telefone: '8134257'} } };
      const next = sinon.stub().returns();
     
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
 
      invalidPhoneNumber(req, res, next);
 
     expect(res.status).to.have.been.calledWith(422);
     expect(res.json).to.have.been.calledWith({
       message: '"Telefone" length must be at least 11 characters long',
     });
     });

  });
  
  afterEach(function () {
    sinon.restore();
  });
});