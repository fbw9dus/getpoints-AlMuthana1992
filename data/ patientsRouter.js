var express = require('express')
var patientsRouter = express.Router()
var patientsController = require('../data/patientsController')

patientsRouter.get('/', patientsController.patients)

patientsRouter.get('/:patientId', patientsController.patient)


module.exports = patientsRouter