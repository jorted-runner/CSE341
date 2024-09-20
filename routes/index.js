const routes = require('express').Router()

// Controllers
const baseController = require('../controllers/base')
const professionalController = require('../controllers/professional');


routes.get('/', baseController.getHome)
routes.get('/professional', professionalController.getData)

module.exports = routes