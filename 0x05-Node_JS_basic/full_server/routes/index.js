const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentController');

const router = express.Router();

router.get('/', (req, res) => AppController.getHomePage(req, res));
router.get('/students', (req, res) => StudentsController.getAllStudents(req, res));
router.get('/students/:major', (req, res) => StudentsController.getAllStudentsByMajor(req, res));

module.exports = router;
