const mgdb = require("mongoose");

const productoSchema = new mgdb.Schema({
    nombre:{
        type:String,
        trim:true,
        require:true
    },
    valor:{
        type:Number,
        require:true
    },
    und:{
        type:Number,
        required:true
    },
    pasillo:{
        type: Number,
        require:true
    },
    categoria:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    cover:{
        require:true,
        type:String
    }

});


mgdb.model("productos" ,productoSchema);
