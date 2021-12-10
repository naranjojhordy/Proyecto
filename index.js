const express = require("express");
const app = express();
const port = 8080;


app.listen(port ,() =>{ 
    console.log("servidor funcionando" , port);
});


app.get(`/` , (req,res) =>{
    res.send("<h1>hola desde node<h1/>");
})
