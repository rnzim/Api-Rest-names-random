const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

var name ={
  names:[
    {
        name: 'Raquel Emanuelly',
        age: '24',
        sexo: 'F',
        id:0

    },
    {
        name: 'Lauren Cat',
        age: '21',
        sexo: 'F',
        id:1

    },
    {
        name: 'Eliza Ibarra',
        age: '23',
        sexo: 'F',
        id:2

    }


  ]


}
app.get('/names',(req,res)=>{
    res.json(name)
})
app.get('/names/:id',(req,res)=>{
    var id = parseInt(req.params.id)
    if(isNaN(id)){
        res.sendStatus(400)
    }else{
        var names = name.names.find(name => name.id == id)
        if(names != undefined){
           res.json(names)
        }else{
            res.sendStatus(404)
        }
    }
})
app.listen(5,()=>{
    console.log('server Is Running')
})