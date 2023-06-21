const express = require('express');
const app = express();//app is a backend application

app.get("/",(req,res)=>{
    res.send("WElcome to my Harrison's backend application");
});

app.get("/harrison", (req,res)=>{
    res.send("Hello Harrison!");
});


app.listen(3000,()=>{
    console.log("Listening");
});