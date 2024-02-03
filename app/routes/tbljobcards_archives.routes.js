module.exports = (app) => {
    // const tutorials = require("../controllers/tutorial.controller.js");
    const tbljobcards_archives = require("../controllers/tbljobcards_archives.controller");
    // const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tbljobcards_archives.create);
    router.get("/", tbljobcards_archives.findAll);
    router.get("/:id", tbljobcards_archives.findOne);
    router.put("/:id", tbljobcards_archives.update);
    router.delete("/:id", tbljobcards_archives.delete);
    router.delete("/", tbljobcards_archives.deleteAll);
    router.get("/published", tbljobcards_archives.findAllPublished);
  
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
  
    app.use("/api/tbljobcards_archives", router);
  };
  