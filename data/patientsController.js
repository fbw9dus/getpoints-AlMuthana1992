var patients = require('../data/patients')

function patientsController(req, res) {
    res.json(patients)
}

function patientController(req, res) {
    var patientId = req.params.patientId 
    var patient = patients[parseInt(patientId) - 1]
    res.json(patient)
}

exports.patients = patientsController
exports.patient = patientController