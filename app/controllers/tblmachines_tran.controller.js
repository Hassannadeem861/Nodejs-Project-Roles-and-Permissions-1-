const db = require("../models");
const Tblmachines_tran = db.tblmachines_tran;
const Op = db.Sequelize.Op;
// const Tanker = db.tankers;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.DateTime ||
        !req.body.Batch_No ||
        !req.body.Tran_No ||
        !req.body.Machine_No ||
        !req.body.Machine_Name ||
        !req.body.Busy_With ||
        !req.body.Start_Date ||
        !req.body.End_Date ||
        !req.body.End_Date ||
        !req.body.Manager ||
        !req.body.User ||
        !req.body.Operator ||
        !req.body.HisDay ||
        !req.body.HisMonth ||
        !req.body.HisYear
    ) {
        res.status(400).send({
            message: "Required Parameters Missing",
        });
        return;
    }

    // Create a Tutorial
    const tblmachines_tran = {
        DateTime: req.body.DateTime,
        Batch_No: req.body.Batch_No,
        Tran_No: req.body.Tran_No,
        Machine_No: req.body.Machine_No,
        Machine_Name: req.body.Machine_Name,
        Busy_With: req.body.Busy_With,
        Start_Date: req.body.Start_Date,
        End_Date: req.body.End_Date,
        Manager: req.body.Manager,
        User: req.body.User,
        Operator: req.body.Operator,
        HisDay: req.body.HisDay,
        HisMonth: req.body.HisMonth,
        HisYear: req.body.HisYear,
    };

    console.log("tblmachines_tran: ", tblmachines_tran);

    // Save Tutorial in the database
    Tblmachines_tran.create(tblmachines_tran)
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
    const tblmachines_tran = req.query.tblmachines_tran;
    console.log("tblmachines_tran", tblmachines_tran);
    var condition = tblmachines_tran ? { tblmachines_tran: { [Op.like]: `%${title}%` } } : null;

    Tblmachines_tran.findAll({ where: condition })
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

    Tblmachines_tran.findByPk(id)
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

    Tblmachines_tran.update(req.body, {
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "tblmachines_tran was updated successfully.",
                });
            } else {
                res.send({
                    message: `Cannot update tblmachines_tran with id=${id}. Maybe Tutorial was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            console.log("err: ", err);

            res.status(500).send({
                message: "Error updating tblmachines_tran with id=" + id,
            });
        });
};

// Delete a Tblmachines_tran with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    console.log("delete", id);


    Tblmachines_tran.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tblmachines_tran was deleted successfully!",
                });
            } else {
                res.send({
                    message: `Cannot delete Tblmachines_tran with id=${id}. Maybe Tblmachines_tran was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Tblmachines_tran with id=" + id,
            });
        });
};

// Delete all Tblmachines_trans from the database.
exports.deleteAll = (req, res) => {
    Tblmachines_tran.destroy({
        where: {},
        truncate: false,
    })
        .then((nums) => {
            res.send({ message: `${nums} Tblmachines_tran were deleted successfully!` });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tblmachines_tran.",
            });
        });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Tblmachines_tran.findAll({ where: { published: true } })
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
