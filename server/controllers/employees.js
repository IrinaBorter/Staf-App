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

    Employee.findOneAndUpdate({ _id: employee._id.toString() }, { status: newStatus }, (error) => {
        if (error) {
            console.log('Unable to change Employee status');
            console.error(error);
            res.sendStatus(400);
        } else {
            Position.findOneAndUpdate({ id: employee.position.id }, { positionStatus: newStatus });
            if (newStatus === 'Assign') {
                removeEmployeeFromAllPositions();
            }
            res.sendStatus(200);
        }
    });
}

function removeEmployeeFromAllPositions() {
    Position.find({}, (error, positions) => {
        positions.forEach(position => {
            position.candidates = [];

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