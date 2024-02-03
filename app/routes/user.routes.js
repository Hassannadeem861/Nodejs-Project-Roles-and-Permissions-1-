// user.routes.js
module.exports = (app) => {
  const users = require("../controllers/user.controller.js");
  const { verifyToken } = require("../middleware/authMiddleware");
  const {
    isAdmin,
    checkAdminOrPermission,
  } = require("../middleware/roleMiddleware");

  // const authMiddleware = require("../middleware/authMiddleware");
  var router = require("express").Router();

  // User Registration (no authentication required for registration)

  router.post("/register", verifyToken, isAdmin, users.create);
  // Inside user.routes.js

  router.post("/login", users.login);

  // Retrieve all published Users

  router.get(
    "/",
    verifyToken,
    checkAdminOrPermission(["viewUsers"]),
    users.findAll
  );

  // Retrieve a single User with id
  router.get("/:id", users.findOne);

  // Update a User with id
  router.put("/:id", users.update);

  // Delete a User with id
  router.delete("/:id", users.delete);

  // Delete all Users
  // router.delete("/", users.deleteAll);
  router.delete("/:id", verifyToken, isAdmin, users.delete);

  // Find all Users with a specific role
  router.get("/byRole/:role", users.findAllByRole);

  // Admin route
  router.post("/adminRoute", verifyToken, users.adminRoute);
  router.post("/assignRole", verifyToken, isAdmin, users.assignRole);

  // User and Employee route
  router.post(
    "/userEmployeeRoute",

    users.userEmployeeRoute
  );

  // All roles route
  router.post(
    "/allRolesRoute",

    users.allRolesRoute
  );

  app.use("/api/users", router);
};
