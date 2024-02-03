// tutorial.model.js
module.exports = (sequelize, Sequelize) => {
    const Tblmanagers = sequelize.define("tblmanagers", {
        Manager_No: {
            type: Sequelize.STRING,
        },
        Manager_Name: {
            type: Sequelize.STRING,
        },
        Manager_Description: {
            type: Sequelize.STRING, //
        },
        Manager_Cell: {
            type: Sequelize.STRING,
        },
        Manager_Section: {
            type: Sequelize.STRING,
        },
        Manager_Status: {
            type: Sequelize.STRING,
        },

    });

    return Tblmanagers;
};
