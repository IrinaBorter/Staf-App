const Employee = require('../models/Employee');

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
    Employee.find({ status: 'Available' }, (error, employees) => {
        if (error) {
            res.sendStatus(400);
        } else {
            res.status(200).send(employees);
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

function changeEmployeeStatus(employee, newStatus) {
    Employee.findOneAndUpdate({ _id: employee._id }, { status: newStatus }, (error) => {
        if (error) {
            console.log('Unable to change Employee status');
            console.error(error);
        }
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