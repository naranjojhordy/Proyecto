const exp = require("constants");
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const morgan  = require("morgan")

app.set("view engine" , "ejs");

//MIddlewares
app.use(morgan("combined"));
app.use(`/css` , express.static('css'));
app.use(`/img` , express.static('img'));
app.use(`/js` , express.static('js'));


app.listen(port ,() =>{ 
    console.log("servidor funcionando" , port);
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