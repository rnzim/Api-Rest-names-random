const express = require('express')
const app = express()
const Names = require('./database/Names')
const connection = require('./database/database')


connection.authenticate().then(()=>{
    console.log('success database')
}).catch((err)=>{
    console.log('err in authenticate: '+ err)
})
app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.get('/names',(req,res)=>{
    Names.findAll().
    then((name)=>{
        if(name == null){
            res.sendStatus(404)
        }else{
            res.json({name:name})
        }
        
         
      }).catch((err)=>{
        res.sendStatus(500)
      })
    
      
})
app.get('/names/:id?',(req,res)=>{
    var id = parseInt(req.params.id)
 
        Names.findOne({where:{id:id}}).
        then((name)=>{
            
            res.json(name)
            
        }).catch((err)=>{
            res.sendStatus(500)
        })

})
app.post('/names',(req,res)=>{
    var name = req.body.name
  
     Names.create({
        name:name
     }).then(()=>{
        res.sendStatus(200)
     }).catch((err)=>{
        console.log('erro '+ err )
        res.sendStatus(400)
     })
 
  
 
})

app.delete('/names/:id',(req,res)=>{
    var id = req.params.id
    Names.destroy({where:{
       id:id
    }}).then(()=>{
        res.sendStatus(200)
    }).catch(()=>{
        res.sendStatus(500)
    })
})
app.listen(3000,()=>{
    console.log('server Is Running')
})
