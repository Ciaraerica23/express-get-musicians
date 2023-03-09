const express = require("express");
const app = express();
const {Musician} = require("./Musician")
const {sequelize} = require("./db")

const port = 3000;

app.get('/musicians/:id',async(req,res)=>{
    const id = req.params.id
    const found = await Musician.findByPk(id)
    res.json(found)
})

app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on port ${port}`)
})