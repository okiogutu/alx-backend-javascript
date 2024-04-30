const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const intro = 'This is the list of our students\n';
      const data = await readDatabase();
      const sweStudents = data[0];
      const csStudents = data[1];
      const students = [
        `Number of students: ${sweStudents.length + csStudents.length}`,
        `Number of students in CS: ${
          csStudents.length
        }. List: ${csStudents.join(', ')}`,
        `Number of students in SWE: ${
          sweStudents.length
        }. List: ${sweStudents.join(', ')}`,
      ];
      res.send(`${intro}${students.join('\n')}`).statusCode = 200;
    } catch (err) {
      res.send(err.message).statusCode = 500;
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const data = await readDatabase();
      const sweStudents = data[0];
      const csStudents = data[1];
      if (req.url === '/students/CS') {
        res.send(`List: ${csStudents.join(', ')}`).statusCode = 200;
      }
      if (req.url === '/students/SWE') {
        res.send(`List: ${sweStudents.join(', ')}`).statusCode = 200;
      } else {
        res.send('Major parameter must be CS or SWE').statusCode = 500;
      }
    } catch (err) {
      res.send(err.message).statusCode = 500;
    }
  }
}

module.exports = StudentsController;
