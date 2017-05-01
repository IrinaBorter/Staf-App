const Applicant = require('../models/Applicant');
const Position = require('../models/Position');

function getApplicants(req, res) {
    Applicant.find({}, (error, applicants) => {
        if (error) {
            res.sendStatus(400);
        } else {
            res.status(200).send(applicants);
        }
    });
}

function getAvailableApplicants(req, res) {
    const positionId = req.params.id;

    Applicant.find({}, (error, applicants) => {
        if (error) {
            res.sendStatus(400);
        } else {
            Position.findOne({ id: positionId }, (error, position) => {
                const availableApplicants = applicants.filter(applicant => {
                    if (!applicant.position.id) {
                        return true;
                    } else {
                        return position.id !== applicant.position.id;
                    }
                });

                res.status(200).send(availableApplicants);
            });
        }
    });
}

function getApplicant(req, res) {
    const id = req.params.id;

    Applicant.findOne({ id: id }, (error, applicant) => {
        if (error) {
            res.sendStatus(400);
        } else {
            res.status(200).send(applicant._doc);
        }
    });
}

function createApplicant(req, res) {
    Applicant.count({}, (error, length) => {
        const applicant = new Applicant({
            id: length + 1,
            type: 'Applicant',
            firstName: req.body.applicant.firstName,
            lastName: req.body.applicant.lastName,
            status: 'Available',
            title: req.body.applicant.title,
            location: req.body.applicant.location,
            primarySkill: req.body.applicant.primarySkill,
            position: req.body.applicant.position,
            project: req.body.applicant.project,
            language: req.body.applicant.language,
            email: req.body.applicant.email,
        });

        applicant.save(error => {
            if (error) {
                res.sendStatus(400);
            } else {
                res.status(200).send({ id: applicant.id, status: 200 });
            }
        });
    });
}

function updateApplicant(req, res) {
    const applicant = req.body.applicant;

    Applicant.findOneAndUpdate({ _id: applicant._id }, applicant, (error) => {
        if (error) {
            res.sendStatus(400);
        } else {
            res.sendStatus(200);
        }
    });
}

function deleteApplicant(req, res) {
    const id = req.body.id;

    Applicant.remove({ id: id }, (error) => {
        if (error) {
            res.sendStatus(400);
        } else {
            res.sendStatus(200);
        }
    });
}

function changeApplicantStatus(req, res) {
    const applicant = req.body.applicant;
    const newStatus = req.body.newStatus;

    Object.assign(applicant, {status: newStatus});

    Applicant.findOneAndUpdate({ _id: applicant._id }, applicant, (error) => {
        if (error) {
            console.log('Unable to change Applicant status');
            console.error(error);
            res.sendStatus(400);
        } else {
            updatePosition(applicant.position.id, applicant, newStatus);
            res.sendStatus(200);
        }
    });
}

function updatePosition(positionId, applicant, newStatus) {
    Position.findOne({ id: positionId }, (error, position) => {
        if (!error) {
            position.positionStatus = applicant.status;

            position.candidates = position.candidates.map(candidate => {
                if (candidate.id === applicant.id && candidate.type === 'Applicant') {
                    return applicant;
                } else {
                    return candidate;
                }
            });

            Position.findOneAndUpdate({ id: positionId }, position, error => {
                if (error) {
                    console.error(error);
                } else {
                    if (newStatus === 'Assign') {
                        removeApplicantFromAllPositions(applicant);
                    }
                }
            })
        }
    });
}

function removeApplicantFromAllPositions(applicant) {
    Position.find({}, (error, positions) => {
        positions.forEach( (position) => {
            let indexOfAssignedCandidate;

            position.candidates.forEach((candidate, index) => {
                if (candidate.id === applicant.id && candidate.type === 'Applicant') {
                    indexOfAssignedCandidate = index;
                }
            });

            if (indexOfAssignedCandidate !== undefined) {
                if (position.id === applicant.position.id) {
                    position.candidates = position.candidates.slice(indexOfAssignedCandidate, indexOfAssignedCandidate + 1);
                } else {
                    position.candidates = position.candidates
                        .slice(0, indexOfAssignedCandidate)
                        .concat(position.candidates.slice(indexOfAssignedCandidate + 1));
                }
            }

            Position.findOneAndUpdate({ _id: position._id }, position, (error) => {
                if (error) {
                    console.error(error);
                }
            });
        });
    });
}

module.exports =  {
    getApplicants,
    getAvailableApplicants,
    getApplicant,
    updateApplicant,
    createApplicant,
    deleteApplicant,
    changeApplicantStatus,
};