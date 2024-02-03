const db =require("../models");
const Tblcounters =db.tblcounters;
const Op =db.Sequelize.Op;

//create and save a new Tutorial 
exports.create  =(req,res) =>{
//validate request
if(!req.body.Batch_initials){
    res.status(400).send({
        message:"Content can not be empty!",
    });
    return;
}
//CREATE A Tblcounters
const tblcounters ={
    batch_initials:req.body.Batch_initials,
    batch_Counter:req.body.Batch_Counter,
};
// save Tblcounters in the database
Tblcounters.create(tblcounters)
.then((data) =>{
    res.send(data);
})
.catch((err) =>{
    res.status(500).send({
        message:
        err.message||"some error occurred while creating the Tblcounters.",
});
});

};


// Retrieve all Tblcounters from the database.
exports.findALL =(req,res)=>{
    const batch_initials =req.query.batch_initials;
    var condition = batch_initials ? {batch_initials:{[Op.like]: `%${batch_initials}%`}} : null;

    Tblcounters.findALL ({where: condition})
    .then((data) =>{
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send({
            message:
            err.message|| "some error occured while reteiving tblcounters",
  });
 });
};
// find a single Batch_initials with an id
exports.findOne =(req, res)=>{
    const id =req.params.id;

    Tblcounters.findByPk(id)
    .then((data)=>{
        if(data){
            res.send(data);
        }else{
            res.status(404).send({
                message:`connot find Tblcounters with id =${id}.`,

            });
        }
    })
 .catch((err)=>{
    res.status(500).send({
                message:"Error retrieving Tblcounters with id="+id,
              
    });
 });
};
//update a Batch_initials by the id in the request
exports.update = (req, res )=>{
    const id = req.params.id;

    Tblcounters.update(req.body,{
        where:{id: id },
    })
    .then((num)=>{
        if(num == 1 ){
            res.send({
               message:"Tblcounters was update successfully.", 
            });
        }else{
            res.send({
                message:`cannot update Tblcounters with id=${id}. maybe Batch_initials was not found or req.body is empty!`,
            });
        }
    })
    .catch((err)=>{
        res.status(500).send({
            message:"errror updating Tblcounters with id="+id,
        });
    });
};
//Delete  all Batch_initials fromm the database.
exports.deleteALL= (req, res)=>{
    Tblcounters.destroy({
        where:{},
        truncate:false,
    })
    .then((nums)=>{
        res.send({message: `${nums} Tblcounters were delete succesfully!`});
    })
    .catch((err) =>{
        res.status(500).send({
            message:
            err.message||"some error occurred while removing all tblcounters.",
        });
    });
};
//find all published Batch_initials
exports.findALLpublished = (req,res)=>{
    Tblcounters.findALL({ where:{ published: true}})
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send({
            message:
            err.message || "some error occured while retriving tblcounters.",
        });
    });
};

