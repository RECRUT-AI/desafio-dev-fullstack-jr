const { donoService } = require('../service');

const getAll = async (_req, res) => {
    const { message } = await donoService.getAll();
    return res.status(200).json(message);
};

module.exports = {
  getAll,
};