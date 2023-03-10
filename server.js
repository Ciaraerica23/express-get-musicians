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

app.post('/musicians',async(req,res)=>{
   await Musician.create({name:"Sza",
    instrument:"voice"})
    const found1 = await Musician.findAll()
    res.send(found1)
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.post('/musicians/add',async(req,res)=>{
    await Musician.create(req.body)
     const found2 = await Musician.findAll()
     res.send(found2)
 })

 app.delete('/musicians/:id',async(req,res)=>{
    const id = req.params.id
    const found = await Musician.findByPk(id)
    await found.destroy()
    const found2 = await Musician.findAll()
    res.json(found2)
 })
app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on port ${port}`)
})