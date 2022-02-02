const express = require("express");
const port = 7000 ;
const app = express();

app.listen(port , (err)=>{

    if(err){console.log(`Error in connecting server : ${err}`); return;}
    console.log(`Server is connected on https://localhost:${port}`);
})