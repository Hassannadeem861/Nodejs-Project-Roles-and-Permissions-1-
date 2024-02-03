const db = require("../models");
const Tbljobcards_archives = db.tbljobcards_archives;
const Op = db.Sequelize.Op;
// const Tanker = db.tankers;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.Datetime || !req.body.Batch_No || !req.body.Tran_No ||
        !req.body.StockCode || !req.body.StockDescription || !req.body.Batch_Qty ||
        !req.body.Start_Date || !req.body.End_Date || !req.body.Batch_Manager ||
        !req.body.Tank_No || !req.body.Tank_Description || !req.body.Tank_Manager
        || !req.body.Machine_No || !req.body.Machine_Description || !req.body.Machine_Manager
        || !req.body.Bottle_Wastage || !req.body.Crimp_Wastage
        || !req.body.Cap_Wastage || !req.body.Label_Wastage || !req.body.Box_Wastage
        || !req.body.Warpping_Wastage
    ) {
        res.status(400).send({
            message: "Required Parameters Missing",
        });
        return;
    }

    // Create a Tutorial
    const tbljobcards_archives = {
        Datetime: req.body.Datetime,
        Batch_No: req.body.Batch_No,
        Tran_No: req.body.Tran_No,
        StockCode: req.body.StockCode,
        StockDescription: req.body.StockDescription,
        Batch_Qty: req.body.Batch_Qty,
        Start_Date: req.body.Start_Date,
        End_Date: req.body.End_Date,
        Batch_Manager: req.body.Batch_Manager,
        Tank_No: req.body.Tank_No,
        Tank_Description: req.body.Tank_Description,
        Tank_Manager: req.body.Tank_Manager,
        Machine_No: req.body.Machine_No,
        Machine_Description: req.body.Machine_Description,
        Machine_Manager: req.body.Machine_Manager,
        // Machine_Manager: req.body.Machine_Manager,
        Bottle_Wastage: req.body.Bottle_Wastage,
        Crimp_Wastage: req.body.Crimp_Wastage,
        Label_Wastage: req.body.Label_Wastage,
        Box_Wastage: req.body.Box_Wastage,
        Warpping_Wastage: req.body.Warpping_Wastage,
    };

    console.log("tbljobcards_archives: ", tbljobcards_archives);

    // Save Tutorial in the database
    Tbljobcards_archives.create(tbljobcards_archives)
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
    const Tank_Manager = req.query.Tank_Manager;
    var condition = Tank_Manager ? { Tank_Manager: { [Op.like]: `%${title}%` } } : null;

    Tbljobcards_archives.findAll({ where: condition })
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

    Tbljobcards_archives.findByPk(id)
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

    Tbljobcards_archives.update(req.body, {
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


    Tbljobcards_archives.destroy({
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
    Tbljobcards_archives.destroy({
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
    Tbljobcards_archives.findAll({ where: { published: true } })
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
