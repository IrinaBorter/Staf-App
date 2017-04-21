const Position = require('../models/Position');

function getPositions(req, res) {
    Position.find({}, (error, positions) => {
        console.log('sdfs');
        if (error) {
            res.sendStatus(400);
        } else {
            res.status(200).send(positions);
        }
    });
}

function getPosition(req, res) {
    const id = req.params.id;

    Position.findOne({ id: id }, (error, position) => {
        if (error) {
            res.sendStatus(400);
        } else {
            res.status(200).send(position._doc);
        }
    });
}

function updatePosition(req, res) {
    const position = req.body.position;

    Position.findOneAndUpdate({ _id: position._id }, position, (error) => {
        if (error) {
            res.sendStatus(400);
        } else {
            res.sendStatus(200);
        }
    });
}

module.exports =  {
    getPositions,
    getPosition,
    updatePosition,
};