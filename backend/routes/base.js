const routes = require('express').Router()

const baseController = require('../controllers/base');

routes.get('/', baseController.getHome)

module.exports = routes