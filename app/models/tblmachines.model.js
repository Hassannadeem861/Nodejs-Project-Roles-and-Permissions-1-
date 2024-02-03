// tutorial.model.js
module.exports = (sequelize, Sequelize) => {
    const Tblmachines = sequelize.define("tblmachines", {
        Machine_No: {
            type: Sequelize.STRING,
        },
        Machine_Description: {
            type: Sequelize.STRING,
        },
        Machine_Capacity: {
            type: Sequelize.STRING, //
        },
        Machine_Status: {
            type: Sequelize.STRING,
        },
    });

    return Tblmachines;
};
