const express = require("express");
const wrapp = express();

wrapp.get('/',(req,res)=>{
   
   res.send("Välkommen till githell you wrapping coders!");
   });

   wrapp.listen(8000);