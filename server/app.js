const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const server = express();
const staticPath = path.resolve('../public/dist');

const  {
    getPositions,
    getPosition,
    updatePosition,
    createPosition,
    deletePosition,
    proposeCandidate,
    preselectCandidate,
} = require('./controllers/positions');

const  {
    getEmployees,
    getEmployee,
    updateEmployee,
    createEmployee,
    deleteEmployee,
} = require('./controllers/employees');

const  {
    getApplicants,
    getApplicant,
    updateApplicant,
    createApplicant,
    deleteApplicant,
} = require('./controllers/applicants');

mongoose.connect('mongodb://localhost/staff', (error) => {
    if (error) {
        console.log('Unable to connect to MongoDB');
    } else {
        console.log('Connection with MongoDB was established successful');
        server.listen(3000, (req, res) => {
            console.log('Listening at http://localhost:3000');
        });
    }
});

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
server.use(bodyParser.json());

server.use('/', express.static('../public/dist'));

server.get('/api/positions', getPositions);
server.get('/api/positions/:id', getPosition);
server.put('/api/positions/edit', updatePosition);
server.post('/api/positions/create', createPosition);
server.delete('/api/positions/delete', deletePosition);
server.put('/api/positions/propose', proposeCandidate);
server.put('/api/positions/preselect', preselectCandidate);

server.get('/api/employees', getEmployees);
server.get('/api/employees/:id', getEmployee);
server.put('/api/employees/edit', updateEmployee);
server.post('/api/employees/create', createEmployee);
server.delete('/api/employees/delete', deleteEmployee);

server.get('/api/applicants', getApplicants);
server.get('/api/applicants/:id', getApplicant);
server.put('/api/applicants/edit', updateApplicant);
server.post('/api/applicants/create', createApplicant);
server.delete('/api/applicants/delete', deleteApplicant);

server.get('*', (request, response) => {
    response.sendFile(staticPath + '/index.html');
});
