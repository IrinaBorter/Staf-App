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

module.exports =  {
    getPositions,
    getPosition
};