module.exports =(app)=>{
    //conts tblcounters = require("../controller/tblcounters.js");
    const tblcounters = require("../controllers/tblcounters.controller.js");
    var router = require("express").Router();

 // create  anew Tblcounter
 router.post("/",tblcounters.create);

 //Retrieve all Tblcounters
 router.get("/", tblcounters.findALL);

 //Retrieve all published Tblcounters
 router.get("/published",tblcounters.findALLpublished);

 //Retrieve a single Tblcounters with id
 router.get("/:id", tblcounters.findOne) ;

 // update a Tblcounters with id 
 router.put("/:id",tblcounters.update);

 // Delete a Tblcounters with id
 router.delete("/:id", tblcounters.delete);

 //Delete all Tblcounters
 router.delete("/", tblcounters.deleteALL);

 app.use("/api/tblcounters",router);

};