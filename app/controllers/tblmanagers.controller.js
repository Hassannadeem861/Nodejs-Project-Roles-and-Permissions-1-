const db = require("../models");
const Tblmanagers = db.tblmanagers;
const Op = db.Sequelize.Op;
// const Tanker = db.tankers;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.Manager_No ||
        !req.body.Manager_Name ||
        !req.body.Manager_Description ||
        !req.body.Manager_Cell ||
        !req.body.Manager_Section ||
        !req.body.Manager_Status

    ) {
        res.status(400).send({
            message: "Required Parameters Missing",
        });
        return;
    }

    // Create a Tutorial
    const tblmanagers = {
        Manager_No: req.body.Manager_No,
        Manager_Name: req.body.Manager_Name,
        Manager_Description: req.body.Manager_Description,
        Manager_Cell: req.body.Manager_Cell,
        Manager_Section: req.body.Manager_Section,
        Manager_Status: req.body.Manager_Status,

    };

    console.log("tblmanagers: ", tblmanagers);

    // Save Tutorial in the database
    Tblmanagers.create(tblmanagers)
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
    const tblmanagers = req.query.tblmanagers;
    console.log("tblmanagers", tblmanagers);
    var condition = tblmanagers ? { tblmanagers: { [Op.like]: `%${title}%` } } : null;

    Tblmanagers.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tblmanagers.",
            });
        });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    console.log("findOne", id);

    Tblmanagers.findByPk(id)
        .then((data) => {
            if (data) {
                console.log("data", data);
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find tblmanagers with id=${id}.`,
                });
            }
        })
        .catch((err) => {
            console.log("err: ", err);
            res.status(500).send({
                message: "Error retrieving tblmanagers with id=" + id,
            });
        });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    console.log("update :", id);

    Tblmanagers.update(req.body, {
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "tblmanagers was updated successfully.",
                });
            } else {
                res.send({
                    message: `Cannot update tblmanagers with id=${id}. Maybe tblmanagers was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            console.log("err: ", err);

            res.status(500).send({
                message: "Error updating tblmanagers with id=" + id,
            });
        });
};

// Delete a Tblmachines_tran with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    console.log("delete", id);


    Tblmanagers.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tblmanagers was deleted successfully!",
                });
            } else {
                res.send({
                    message: `Cannot delete Tblmanagers with id=${id}. Maybe Tblmanagers was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Tblmanagers with id=" + id,
            });
        });
};

// Delete all Tblmachines_trans from the database.
exports.deleteAll = (req, res) => {
    Tblmanagers.destroy({
        where: {},
        truncate: false,
    })
        .then((nums) => {
            res.send({ message: `${nums} Tblmanagers were deleted successfully!` });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tblmanagers.",
            });
        });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Tblmanagers.findAll({ where: { published: true } })
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
