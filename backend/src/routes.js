const express = require('express');

const OngController = require('./controllenrs/OngController');
const IncidentController = require('./controllenrs/IncidentController');
const ProfileController = require('./controllenrs/ProfileController');
const SessionController = require('./controllenrs/SessionController');
const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.post('/sessions', SessionController.create);
module.exports = routes;