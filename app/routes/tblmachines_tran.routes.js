module.exports = (app) => {
    // const tutorials = require("../controllers/tutorial.controller.js");
    const tblmachines_tran = require("../controllers/tblmachines_tran.controller");
    // const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tblmachines_tran.create);
    router.get("/", tblmachines_tran.findAll);
    router.get("/:id", tblmachines_tran.findOne);
    router.put("/:id", tblmachines_tran.update);
    router.delete("/:id", tblmachines_tran.delete);
    router.delete("/", tblmachines_tran.deleteAll);
    router.get("/published", tblmachines_tran.findAllPublished);
  
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
  
    app.use("/api/tblmachines_tran", router);
  };
  