module.exports = (app) => {
    // const tutorials = require("../controllers/tutorial.controller.js");
    const tblmanagers = require("../controllers/tblmanagers.controller");
    // const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tblmanagers.create);
    router.get("/", tblmanagers.findAll);
    router.get("/:id", tblmanagers.findOne);
    router.put("/:id", tblmanagers.update);
    router.delete("/:id", tblmanagers.delete);
    router.delete("/", tblmanagers.deleteAll);
    router.get("/published", tblmanagers.findAllPublished);
  
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
  
    app.use("/api/tblmanagers", router);
  };
  