const Employee = require('../models/Employee');
const Position = require('../models/Position');

function getEmployees(req, res) {
    Employee.find({}, (error, employees) => {
        if (error) {
            res.sendStatus(400);
        } else {
            res.status(200).send(employees);
        }
    });
}

function getAvailableEmployees(req, res) {
    const positionId = req.params.id;

    Employee.find({}, (error, employees) => {
        if (error) {
            res.sendStatus(400);
        } else {
            Position.findOne({ id: positionId }, (error, position) => {
                const availableEmployees = employees.filter(employee => {
                    if (!employee.position.id) {
                        return true;
                    } else {
                        return position.id !== employee.position.id;
                    }
                });

                res.status(200).send(availableEmployees);
            });
        }
    });
}

function getEmployee(req, res) {
    const id = req.params.id;

    Employee.findOne({ id: id }, (error, employee) => {
        if (error) {
            res.sendStatus(400);
        } else {
            res.status(200).send(employee._doc);
        }
    });
}

function createEmployee(req, res) {
    Employee.count({}, (error, length) => {
        const employee = new Employee({
            id: length + 1,
            type: 'Employee',
            firstName: req.body.employee.firstName,
            lastName: req.body.employee.lastName,
            status: 'Available',
            title: req.body.employee.title,
            location: req.body.employee.location,
            primarySkill: req.body.employee.primarySkill,
            position: req.body.employee.position,
            project: req.body.employee.project,
            language: req.body.employee.language,
            email: req.body.employee.email,
        });

        employee.save(error => {
            if (error) {
                res.sendStatus(400);
            } else {
                res.status(200).send({ id: employee.id, status: 200 });
            }
        });
    });
}

function updateEmployee(req, res) {
    const employee = req.body.employee;

    Employee.findOneAndUpdate({ _id: employee._id }, employee, (error) => {
        if (error) {
            res.sendStatus(400);
        } else {
            res.sendStatus(200);
        }
    });
}

function deleteEmployee(req, res) {
    const id = req.body.id;

    Employee.remove({ id: id }, (error) => {
        if (error) {
            res.sendStatus(400);
        } else {
            res.sendStatus(200);
        }
    });
}

function changeEmployeeStatus(req, res) {
    const employee = req.body.employee;
    const newStatus = req.body.newStatus;

    Object.assign(employee, {status: newStatus});

    Employee.findOneAndUpdate({ _id: employee._id }, employee, (error) => {
        if (error) {
            console.log('Unable to change Employee status');
            console.error(error);
            res.sendStatus(400);
        } else {
            updatePosition(employee.position.id, employee, newStatus);
            res.sendStatus(200);
        }
    });
}

function updatePosition(positionId, employee, newStatus) {
    Position.findOne({ id: positionId }, (error, position) => {
        if (!error) {
            position.positionStatus = newStatus;

            position.candidates = position.candidates.map(candidate => {
                if (candidate.id === employee.id && candidate.type === 'Employee') {
                    return employee;
                } else {
                    return candidate;
                }
            });

            Position.findOneAndUpdate({ id: positionId }, position, error => {
                if (error) {
                    console.error(error);
                    res.sendStatus(400);
                } else {
                    if (newStatus === 'Assign') {
                        removeEmployeeFromAllPositions(employee);
                    }
                }
            })
        }
    });
}

function removeEmployeeFromAllPositions(employee) {
    Position.find({}, (error, positions) => {
        positions.forEach( (position) => {
            let indexOfAssignedCandidate;

            position.candidates.forEach((candidate, index) => {
                if (candidate.id === employee.id && candidate.type === 'Employee') {
                    indexOfAssignedCandidate = index;
                }
            });

            if (indexOfAssignedCandidate !== undefined) {
                if (position.id === employee.position.id) {
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
    getEmployees,
    getAvailableEmployees,
    getEmployee,
    updateEmployee,
    createEmployee,
    deleteEmployee,
    changeEmployeeStatus,
};