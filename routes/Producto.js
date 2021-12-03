const mgdb = require("mongoose");
const express = require("express");
const db = require("../database/db"),
   productos = require("../database/productos");

//Endpoints
   const router = express.Router();

   router.use(express.json());
   router.use(express.urlencoded({extended:true}));


   router.route(`/`)
     .get(function(req,res){
        mgdb.model("productos").find({} , (err,productos) =>{
           if(err) throw err;
           res.json(productos);
        })
     })

     .post((req,res) =>{
      let nombre = req.body.nombre;
      let valor = req.body.valor;
      let und = req.body.und;
      let pasillo = req.body.pasillo;
      let categoria = req.body.categoria;
      let description = req.body.description;
      let cover    = req.body.cover;

     
      mgdb.model("productos").create({
         "nombre" : nombre,
         "valor" : valor,
         "und" : und,
         "pasillo" : pasillo,
         "categoria" : categoria,
         "description" : description,
         "cover" : cover
      }), (err , productos) =>{
         if(err){
         res.json({"mensaje" : "Producto no guardado"});
         console.log("error cuando se guarda" , productos);
      }else{
         res.json(productos);
      }
   
      }
   });

 
       
       router.route(":/id")
     .get()
     .put()
     .delete()
     


     module.exports = router;
