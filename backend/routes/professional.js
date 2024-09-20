const routes = require('express').Router()

// Controllers
const professionalController = require('../controllers/professional');

routes.get('/', professionalController.getData)

module.exports = routes