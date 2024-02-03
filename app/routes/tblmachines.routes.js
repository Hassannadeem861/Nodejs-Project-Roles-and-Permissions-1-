module.exports = (app) => {
    // const tutorials = require("../controllers/tutorial.controller.js");
    const tblmachines = require("../controllers/tblmachines.controller");
    // const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tblmachines.create);
    router.get("/", tblmachines.findAll);
    router.get("/:id", tblmachines.findOne);
    router.put("/:id", tblmachines.update);
    router.delete("/:id", tblmachines.delete);
    router.delete("/", tblmachines.deleteAll);
    router.get("/published", tblmachines.findAllPublished);
  
    // // Retrieve all Tutorials
    // router.get("/", tutorials.findAll);
  
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", tutorials.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
  
    // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
  
    app.use("/api/tblmachines", router);
  };
  