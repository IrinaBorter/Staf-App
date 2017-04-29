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

function getAvailableApplicants(req, res) {
    Applicant.find({ status: 'Available' }, (error, applicants) => {
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

function changeApplicantStatus(applicant, newStatus) {
    Applicant.findOneAndUpdate({ _id: applicant._id }, { status: newStatus }, (error) => {
        if (error) {
            console.log('Unable to change Applicant status');
            console.error(error);
        }
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