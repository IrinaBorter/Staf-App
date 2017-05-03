const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const server = express();
const staticPath = path.resolve('../public/dist');
const passport = require('./models/Authentication');
const expressSession = require('express-session');

const {
    getPositions,
    getPosition,
    updatePosition,
    createPosition,
    deletePosition,
    proposeCandidate,
    preselectCandidate,
    assignCandidate,
    cancelCandidate,
} = require('./controllers/positions');

const {
    getEmployees,
    getAvailableEmployees,
    getEmployee,
    updateEmployee,
    createEmployee,
    deleteEmployee,
    changeEmployeeStatus,
} = require('./controllers/employees');

const {
    getApplicants,
    getAvailableApplicants,
    getApplicant,
    updateApplicant,
    createApplicant,
    deleteApplicant,
    changeApplicantStatus,
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

server.use(expressSession({ secret: 'mySecretKey' }));
server.use(passport.initialize());
server.use(passport.session());

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
server.use(bodyParser.json());

server.post('/login', passport.authenticate('login', {
    successRedirect: '/',
    failureRedirect: '/login',
}));

server.post('/signup', passport.authenticate('signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
}));

server.get('/signup', (req, res) => {
    res.sendfile(staticPath + '/signup.html');
});

server.get('/signout', (req, res) => {
    req.logout();
    res.redirect('/');
});

server.use('/', isAuthenticated, express.static('../public/dist'));

server.get('/api/positions', getPositions);
server.get('/api/positions/:id', getPosition);
server.put('/api/positions/edit', updatePosition);
server.post('/api/positions/create', createPosition);
server.delete('/api/positions/delete', deletePosition);
server.put('/api/positions/propose', proposeCandidate);
server.put('/api/positions/preselect', preselectCandidate);
server.put('/api/positions/assign', assignCandidate);
server.put('/api/positions/cancel', cancelCandidate);

server.get('/api/employees', getEmployees);
server.get('/api/employees/available/:id', getAvailableEmployees);
server.get('/api/employees/:id', getEmployee);
server.put('/api/employees/edit', updateEmployee);
server.post('/api/employees/create', createEmployee);
server.delete('/api/employees/delete', deleteEmployee);
server.put('/api/employees/change-status', changeEmployeeStatus);

server.get('/api/applicants', getApplicants);
server.get('/api/applicants/available/:id', getAvailableApplicants);
server.get('/api/applicants/:id', getApplicant);
server.put('/api/applicants/edit', updateApplicant);
server.post('/api/applicants/create', createApplicant);
server.delete('/api/applicants/delete', deleteApplicant);
server.put('/api/applicants/change-status', changeApplicantStatus);

server.get('/login', (req, res) => {
    res.sendfile(staticPath + '/login.html');
});

server.get('*', isAuthenticated, (request, response) => {
    response.sendFile(staticPath + '/index.html');
});

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    
    res.sendFile(staticPath + '/login.html');
}
