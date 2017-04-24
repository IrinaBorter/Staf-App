const Applicant = require('../models/Applicant');

function getApplicants(req, res) {
    Applicant.find({}, (error, applicants) => {
        if (error) {
            res.sendStatus(400);
        } else {
            res.status(200).send(applicants);
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
            firstName: req.body.applicant.firstName,
            lastName: req.body.applicant.lastName,
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

module.exports =  {
    getApplicants,
    getApplicant,
    updateApplicant,
    createApplicant,
    deleteApplicant,
};