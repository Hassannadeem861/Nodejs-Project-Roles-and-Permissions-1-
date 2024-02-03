const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Sync database and initialize routes
const db = require("./app/models");
db.sequelize
  .sync({ alter: true })
  .then(async () => {
    console.log("Database synced");

    // Check if admin user exists, create one if not
    const adminUser = await db.users.findOne({ where: { username: "admin" } });
    if (!adminUser) {
      // Create admin user
      await db.users.create({
        username: "admin",
        password: "admin", // You should hash the password in a real-world scenario
        role: "admin",
        permissions: ["updateUser", "deleteUser", "viewUsers"],
      });
      console.log("Admin user created");
    } else {
      console.log("Admin user already exists");
    }

    // Start the server after ensuring admin user is created
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Rana application." });
});
require("./app/routes/turorial.routes")(app);

require("./app/routes/user.routes")(app);
require("./app/routes/tbljobcards_archives.routes")(app);
require("./app/routes/tblmachines.routes")(app);
require("./app/routes/tblmachines_tran.routes")(app);
require("./app/routes/tblmanagers.routes")(app);
// set port, listen for requests
