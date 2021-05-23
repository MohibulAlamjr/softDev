const express = require ('express');


const app = express ();
const port = 8080;

app.get ('/',function(req,res){
    res.send('Hello softDevians')
})

app.post ('/about',function(req,res){
    res.send('My About')
})

app.put ('/contact',function(req,res){
    res.send('My Contact')
})

app.delete ('/softDev',function(req,res){
    res.send('Hello softDevianssssssssss')
})



// Simple Response
//  send()==indicate body response 
// end() === indicate ending 

app.get ('/one',function(req,res){
    res.end('This is simple response')
})

app.post ('/two',function(req,res){
    res.end('This is simple string response')
})

// Response status 

app.get ('/three',function(req,res){
    res.status('401').end('unauthorised')
})


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

// .//////////////////////////////


// app.get ("/Dhaka",function(req,res){
//     res.redirect("Example app listening at http://localhost:" + port + "/Narshingdi")
// })


// app.get ("/Narshingdi",function(req,res){
//     res.send("I live in Narshingdi")
// })

// Response Header 

app.get ("/five",function(req,res){
    res.append("name","Sweety Akter")
    res.append("age","22")
    res.append("city","Narshingdi")
    res.send("Hello!")
    res.status(201).end("OK");
})

// Response Cookie

app.get ("/six",function(req,res){
    res.cookie("name","Sweety Akter")
    res.cookie("age","22")
    res.cookie("city","Narshingdi")
    res.cookie("gender","Female")
    res.end("Success")
})

// Clear Cookie

app.get ("/seven",function(req,res){
    res.clearCookie("name","Sweety Akter")
    res.clearCookie("age","22")
    res.end("Success")
})






app.listen(port,function(){
    console.log('Example app listening at http://localhost:' + port)
})