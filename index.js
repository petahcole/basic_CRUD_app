const express = require ("express");
const app = express();
const bodyParser = require ("body-parser");
require ("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const knex = require("./database-connection");
const port = process.env.PORT || 3000;
app.listen(port, () =>  {
    console.log(`listening on ${port}`);
});


app.get("/wizard", (req, res)=> {
   knex("wizard").then((data)=>  {
       res.json(data);
   })
})

app.get("/wizard/:id", (req, res)=> {
    knex("wizard").where("id", req.params.id).first().then((data)=>  {
        res.json(data);
    })
})

app.post("/wizard", (req, res) =>   {
    console.log(req.body);
    knex("wizard").insert({
        Name: req.body.name,
        Color: req.body.color,
        Morality: req.body.morality
    },'*').then((data)=> {
        console.log("yay!")
        res.json(data)
    }) 
})