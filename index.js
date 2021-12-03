const { application } = require("express");
const express = require("express");
const app = express();
const port = 8080;
const morgan = require("morgan");
const path = require("path");
const ejs = require("ejs");



//ROUTES

const stockRoutes = require("./routes/Producto");
app.use("/home/inicio/tustock" , stockRoutes);

app.get("/home/inicio/tustock/add" ,(req,res) =>{
    res.render("registro")
})


app.get(`/home` , (req,res) =>{
    res.render("home");
});

app.get(`/home/inicio/`, (req,res) =>{
  res.render("index");
});







//middlewares
app.use(morgan("combined"));
app.set("views" ,path.join(__dirname,"views"));
app.set("view engine" , "ejs");
//rutas no establecidas
app.use((req,res) =>{
    res.status(404).send("404 NOT FOUND");
})

// app.listen(port ,() =>{
//     console.log("server on port" , [port]);
// });


// app.get(`/` , (req,res) =>{
//     res.json({
//         "saludo": "hola"
//     })
// });

const server = app.listen(8080, ()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log("Sever listening at http://" ,host,port);
});