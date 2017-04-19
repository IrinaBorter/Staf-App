const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const server = express();
const  { getPositions, getPosition } = require('./controllers/positions');
const staticPath = path.resolve('../public/dist');

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

server.use('/', express.static('../public/dist'));

server.get('/api/positions', getPositions);
server.get('/api/positions/:id', getPosition);

server.get('*', (request, response) => {
    response.sendFile(staticPath + '/index.html');
});
