const ENVIRONMENT = require('../config/environment');

module.exports = {
    getById: function(id) {
        var f = welcomes.find(w => w.id == id);
        return f !== undefined ? f : 'undefined';
    },
};

const welcomes = [
    { 
        id: 1,
        nome: 'Silvio Junior', 
        imagem: `${ENVIRONMENT.API_BASE_URL}/images/hello-world.jpg`
    },
];