

const { Router } = require('express');
const routes = new Router();

const HomeController = require('../app/controllers/HomeController');

routes.get('/', HomeController.index);

module.exports = routes;