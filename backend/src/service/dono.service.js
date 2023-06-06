const { donoModel } = require('../model');

const getAll = async () => {
  const listAll = await donoModel.getAll();
  return { type: null, message: listAll };
};

module.exports = {
  getAll,
};