// tutorial.model.js
module.exports = (sequelize, Sequelize) => {
    const Tblmachines_tran = sequelize.define("tblmachines_tran", {
        DateTime: {
            type: Sequelize.DATE,
        },
        Batch_No: {
            type: Sequelize.STRING,
        },
        Tran_No: {
            type: Sequelize.STRING, //
        },
        Machine_No: {
            type: Sequelize.STRING,
        },
        Machine_Name: {
            type: Sequelize.STRING,
        },
        Busy_With: {
            type: Sequelize.STRING,
        },
        Start_Date: {
            type: Sequelize.DATE,
        },
        End_Date: {
            type: Sequelize.DATE,
        },
        Manager: {
            type: Sequelize.STRING,
        },
        User: {
            type: Sequelize.STRING,
        },
        Operator: {
            type: Sequelize.STRING,
        },
        HisDay: {
            type: Sequelize.STRING,
        },
        HisMonth: {
            type: Sequelize.STRING,
        },
        HisYear: {
            type: Sequelize.STRING,
        },
    });

    return Tblmachines_tran;
};
