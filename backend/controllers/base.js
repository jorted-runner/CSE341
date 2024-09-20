const baseController = {}

baseController.getHome = (req, res) => {
  res.send('Welcome home');
};

module.exports = baseController