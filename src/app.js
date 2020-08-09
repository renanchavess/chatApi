const express = require('express');
const routesHome = require('./routes/homeRoutes');

require('./database');

class App {
  constructor() {
    this.server = express();
    this.server.use(express.json());
    this.routes();
  }

  routes() {
    this.server.use('/home', routesHome);
  }
}

module.exports = new App().server;
