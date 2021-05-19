const express = require ('express');


const app = express ();
const port = 8080;

// app.get ('/',function(req,res){
//     res.send('Hello softDevians')
// })

// app.post ('/about',function(req,res){
//     res.send('My About')
// })

// app.put ('/contact',function(req,res){
//     res.send('My Contact')
// })

// app.delete ('/softDev',function(req,res){
//     res.send('Hello softDevianssssssssss')
// })



// Simple Response
//  send()==indicate body response 
// end() === indicate ending 

// app.get ('/one',function(req,res){
//     res.end('This is simple response')
// })

// app.post ('/two',function(req,res){
//     res.end('This is simple string response')
// })

// // Response status 

// app.get ('/three',function(req,res){
//     res.status('401').end('unauthorised')
// })
// JSON response 


app.get ('/three',function(req,res){

    let myJSONArray =[
        {
        name :"sweety",
        city :"Dhaka",
        occupation :"student"
    },
    {
        name : "Mouly",
        city :"Jhinaidah",
        occupation :"student"
    },
    {
        name : "kaium",
        city : "Barishailla",
        occupation :"murgiwala"
    }
]
    res.json(myJSONArray);
})

app.listen(port,function(){
    console.log('Example app listening at http://localhost:' + port)
})