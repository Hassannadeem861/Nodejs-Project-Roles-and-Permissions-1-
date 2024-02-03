// tutorial.model.js
module.exports = (sequelize, Sequelize) => {
    const Tbljobcards_archive = sequelize.define("tbljobcards_archives", {
        Datetime: {
            type: Sequelize.DATE,
        },
        Batch_No: {
            type: Sequelize.STRING,
        },
        Tran_No: {
            type: Sequelize.STRING, //
        },
        StockCode: {
            type: Sequelize.STRING,
        },
        StockDescription: {
            type: Sequelize.STRING,
        },
        Batch_Qty: {
            type: Sequelize.STRING, //
        },
        Start_Date: {
            type: Sequelize.DATE, //
        },
        End_Date: {
            type: Sequelize.DATE, //
        },
        Batch_Manager: {
            type: Sequelize.STRING,
        },
        Tank_No: {
            type: Sequelize.STRING,
        },
        Tank_Description: {
            type: Sequelize.STRING,
        },
        Tank_Manager: {
            type: Sequelize.STRING,
        },
        Machine_No: {
            type: Sequelize.STRING,
        },
        Machine_Description: {
            type: Sequelize.STRING,
        },
        Machine_Manager: {
            type: Sequelize.STRING,
        },
        Bottle_Wastage: {
            type: Sequelize.STRING,
        },
        Crimp_Wastage: {
            type: Sequelize.STRING,
        },
        Cap_Wastage: {
            type: Sequelize.STRING,
        },
        Label_Wastage: {
            type: Sequelize.STRING,
        },
        Box_Wastage: {
            type: Sequelize.STRING,
        },
        Warpping_Wastage: {
            type: Sequelize.STRING,
        },
    });

    return Tbljobcards_archive;
};
