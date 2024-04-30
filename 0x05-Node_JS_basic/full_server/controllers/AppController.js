class AppController {
  static getHomePage(req, res) {
    res.send('Hello Holberton School!').statusCode = 200;
  }
}

module.exports = AppController;
