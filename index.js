const exp = require("constants");
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const morgan  = require("morgan")
const mgdb = require("mongoose");
const { spawn } = require("child_process");
const ejs = require('ejs');


app.set("view engine" , "ejs");

//MIddlewares
app.use(morgan("combined"));
app.use(`/css` , express.static('css'));
app.use(`/img` , express.static('img'));
app.use(`/js` , express.static('js'));


app.listen(port ,() =>{ 
    console.log("servidor funcionando" , port);
});


//CONEXIÓN A BASE DE DATOS 

app.use(require("body-parser").urlencoded({extended:false}));

mgdb.connect("mongodb://localhost:27017/PGC" , function(err,db){
    if(err) throw err;
    console.log("base de datos conectada");
});

//Schema

const Productos  = mgdb.model("productos" ,{
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


//Registro 
app.post("/add" , (req,res) =>{
    new Productos (req.body).save().then(() =>{
    res.send(`<h1>Registro Exitoso, Producto en base de datos<h1/>
    <a href="/registro"><input type="button" value="Volver">/a>>  `);
});

});
app.get(`/registro` , (req,res) =>{
let registro = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

<title>Registro Tustock</title>
</head>
<body>
<h1>Registro Producto en tienda</h1>
<div class="container  p-4">
    <form action="/add" method="POST" class="card card-body">
        <div class="form-group">
            <label for="Nombre"></label>
        <input type="text" class="form-control"  name="nombre" id="name" placeholder='Ingresa el nombre del producto' autofocus required>
        </div>

        <div class="form-group">
            <label for="valor"></label>
        <input type="text" class="form-control"  name="valor" id="name" placeholder='Ingresa el valor del producto' autofocus required>
        </div>

        <div class="form-group">
            <label for="und"></label>
        <input type="text" class="form-control"  name="und" id="name" placeholder='Ingresa la cantidad que ingresa a la dependencia (Unidades)' autofocus required>
        </div>

        <div class="form-group">
            <label for="pasillo"></label>
        <input type="text" class="form-control"  name="pasillo" id="name" placeholder='Ingresa el pasillo donde se encuentra el producto (Punto de venta)' autofocus required>
        </div>

        <div class="form-group">
            <label for="categoria"></label>
        <input type="text" class="form-control"  name="categoria" id="name" placeholder='Ingresa la categoria del producto' autofocus required>
        </div>

        <div class="form-group">
            <label for="description"></label>
        <input type="text" class="form-control"  name="description" id="name" placeholder='Ingresa la Descripción del producto' autofocus required>
        </div>

        <div class="form-group">
            <label for="cover"></label>
        <input type="text" class="form-control"  name="cover" id="name" placeholder='Ingresa la url del producto(imagen)' autofocus required>
        </div>

        <input type="submit" value="Registrar Producto" class="btn btn-warning">
    </form>
</div>
</body>
</html>
`;
res.send(registro);
});




app.get(`/inicio` , (req,res) =>{
    res.render("index.ejs")
})

app.get(`/menuProductos` , (req,res) =>{
    app.use('css' , express.static('css'))
    res.render('MenuProductos.ejs')
})


app.get('/leche' , (req,res) =>{
    res.render('leche.ejs');
})

app.get('/Huevos' , (req,res) =>{
    res.render('Huevos.ejs');
})

app.get('/Fabuloso' , (req,res) =>{
    res.render('Fabuloso.ejs');
})

app.get('/Papel' , (req,res) =>{
    res.render('Papel.ejs')
})

app.get('/Salsa' , (req,res) =>{
    res.render('Salsa.ejs')
})

app.get('/Pastas' , (req,res) =>{
    res.render('Pastas.ejs')
})


