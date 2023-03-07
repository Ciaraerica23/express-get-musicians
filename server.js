const express = require("express");
const app = express();
const {Musician} = require("./Musician")
const {sequelize} = require("./db")

const port = 3000;

app.get('/musicians',async(req,res)=>{
    const found = await Musician.findAll()
    res.json(found)
})

app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on port ${port}`)
})