const mgdb = require("mongoose");
mgdb.connect("mongodb://localhost:27017/PGC" , function(err,db){
    if(err) throw err;
    console.log("base de datos conectada");
});

module.exports = mgdb;