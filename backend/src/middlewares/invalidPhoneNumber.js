const invalidPhoneNumber = (req, res, next) => {
  const { dono } = req.body;
  if (!dono.telefone) return res.status(400).json({ message: '"Telefone" is required' });
  if (dono.telefone.length < 11) {
 return res.status(422)
  .json({ message: '"Telefone" length must be at least 11 characters long' }); 
}
  return next();
};

module.exports = { invalidPhoneNumber };