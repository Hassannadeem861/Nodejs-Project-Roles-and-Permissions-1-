const { sequelize, Sequelize } = require(".");

//tblcounters.model.js 
module.exports=(sequelize, Sequelize) =>{
    const tblcounters = sequelize.define("tblcounters",{
        Batch_initials:{
            type: Sequelize.STRING,
            allowNull:false,

        },
        Batch_Counter:{
        type :Sequelize.STRING,
        allowNull:false,
        },
  
    })
    return tblcounters;
};