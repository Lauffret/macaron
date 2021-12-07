Controler = require('../controlers/controler');

module.exports = (server) => {
    server.get('/', Controler.getLieux);
}