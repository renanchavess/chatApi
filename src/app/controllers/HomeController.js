class HomeController {
  async index(req, res) {
    res.json('Hello World');
  }
}

module.exports = new HomeController();
