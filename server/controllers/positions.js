const Position = require('../models/Position');
const Employee = require('../models/Employee');
const Applicant = require('../models/Applicant');

function getPositions(req, res) {
    Position.find({}, (error, positions) => {
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

function createPosition(req, res) {
    Position.count({}, (error, length) => {
        const position = new Position({
            id: length + 1,
            code: req.body.position.code,
            role: req.body.position.role,
            project: req.body.position.project,
            salary: req.body.position.salary,
            primarySkill: req.body.position.primarySkill,
            positionStatus: req.body.position.positionStatus,
            candidates: req.body.position.candidates,
            plannedStartDate: req.body.position.plannedStartDate,
            description: req.body.position.description,
        });

        position.save(error => {
            if (error) {
                res.sendStatus(400);
            } else {
                res.status(200).send({ id: position.id, status: 200 });
            }
        });
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

function deletePosition(req, res) {
    const id = req.body.id;

    Position.remove({ id: id }, (error) => {
        if (error) {
            res.sendStatus(400);
        } else {
            res.sendStatus(200);
        }
    });
}

function proposeCandidate(req, res) {
    const candidate = req.body.candidate;
    const position = req.body.position;

    Promise
        .all([
            Employee.findOne({ id: candidate.id, type: candidate.type }).exec(),
            Applicant.findOne({ id: candidate.id, type: candidate.type }).exec(),
        ])
        .then(candidates => {
            candidates
                .filter(candidate => candidate && candidate._doc)
                .map(candidate => candidate._doc)
                .forEach(candidate => position.candidates.push(candidate));

            Position.findOneAndUpdate({ _id: position._id }, position, (error) => {
                if (error) {
                    res.sendStatus(400);
                } else {
                    res.sendStatus(200);
                }
            });
        })
        .catch(error => {
            console.log(error);
        });
}

module.exports =  {
    getPositions,
    getPosition,
    updatePosition,
    createPosition,
    deletePosition,
    proposeCandidate,
};