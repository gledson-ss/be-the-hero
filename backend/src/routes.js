const express = require('express');

const OngController = require('./controllenrs/OngController');
const IncidentController = require('./controllenrs/IncidentController');
const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incudents/:id', IncidentController.delete);
module.exports = routes;