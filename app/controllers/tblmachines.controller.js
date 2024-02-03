const db = require("../models");
const Tblmachines = db.tblmachines;
const Op = db.Sequelize.Op;
// const Tanker = db.tankers;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.Machine_No || !req.body.Machine_Description || !req.body.Machine_Capacity || !req.body.Machine_Status) {
        res.status(400).send({
            message: "Required Parameters Missing",
        });
        return;
    }

    // Create a Tutorial
    const tblmachines = {
        Machine_No: req.body.Machine_No,
        Machine_Description: req.body.Machine_Description,
        Machine_Capacity: req.body.Machine_Capacity,
        Machine_Status: req.body.Machine_Status,
    };

    console.log("tblmachines: ", tblmachines);

    // Save Tutorial in the database
    Tblmachines.create(tblmachines)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial.",
            });
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const tblmachines = req.query.tblmachines;
    console.log("tblmachines", tblmachines);
    var condition = tblmachines ? { tblmachines: { [Op.like]: `%${title}%` } } : null;

    Tblmachines.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials.",
            });
        });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    console.log("findOne", id);

    Tblmachines.findByPk(id)
        .then((data) => {
            if (data) {
                console.log("data", data);
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Tutorial with id=${id}.`,
                });
            }
        })
        .catch((err) => {
            console.log("err: ", err);
            res.status(500).send({
                message: "Error retrieving Tutorial with id=" + id,
            });
        });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    console.log("update :", id);

    Tblmachines.update(req.body, {
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tutorial was updated successfully.",
                });
            } else {
                res.send({
                    message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            console.log("err: ", err);

            res.status(500).send({
                message: "Error updating Tutorial with id=" + id,
            });
        });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    console.log("delete", id);


    Tblmachines.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tutorial was deleted successfully!",
                });
            } else {
                res.send({
                    message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id,
            });
        });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Tblmachines.destroy({
        where: {},
        truncate: false,
    })
        .then((nums) => {
            res.send({ message: `${nums} Tutorials were deleted successfully!` });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials.",
            });
        });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Tblmachines.findAll({ where: { published: true } })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials.",
            });
        });
};
