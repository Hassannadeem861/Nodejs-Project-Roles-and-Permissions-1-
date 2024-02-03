// user.model.js
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    role: {
      type: Sequelize.STRING,
    },
    permissions: {
      type: Sequelize.JSON, // Store permissions as JSON
    },
  });

  return User;
};
