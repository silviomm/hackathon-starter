const ENVIRONMENT = require('../config/environment');
const welcomeDAO = require('../json-db/welcomeDAO');
const logService = require('../services/logService');

module.exports = function(app){

    const BASE_URL = '/api/welcome'
    
    app.route(`${BASE_URL}/:id`)
        .get((req, res) => {
            logService.logRequestRecebida(`${BASE_URL}`, 'GET');

            var id = req.params.id;
            res.status(200).json(welcomeDAO.getById(id));
        })
        .post((req, res) => {
            logService.logRequestRecebida(`${BASE_URL}`, 'POST');

            var postData = req.body;
            res.status(200).json({echo: postData});
        });

}