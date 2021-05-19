const express = require ('express');


const app = express ();
const port = 8080;

// app.get('/', function(req,res){
//     res.send('Home Page')
// })


// app.post('/about', function(req,res){
//     res.send('About Page')
// })


// app.put('/contact', function(req,res){
//     res.send('Contact Page')
// })


// app.delete('/terms', function(req,res){
//     res.send('Terms Page')
// })

// app.listen(port, function(){
//     console.log('Example app listening at http://localhost:' + port)
// })





////// simple string response /////

/// res.send(for body)

//  app.get('/one', function(req,res){
//     res.send('This is simple string response');
//  })

 
//  app.post('/two', function(req,res){
//     res.send('This is simple string response');
//  })

//  app.listen(port, function(){
//         console.log('Example app listening at http://localhost:' + port)
//      })



//res.end(for end) 
// app.get('/one', function(req,res){
//     res.end('This is simple string response');
//  })

 
//  app.post('/two', function(req,res){
//     res.end('This is simple string response');
//  })

//  app.listen(port, function(){
//         console.log('Example app listening at http://localhost:' + port)
//      })

    // ////// manupulated response status code ///////
     
//  app.post('/three', function(req,res){
//     res.status(401).end("Unauthorized");

//  })

 
//  app.listen(port, function(){
//     console.log('Example app listening at http://localhost:' + port)
//  })



// ////// JSON Response ////////

    
app.post('/three', function(req,res){

    let myJSONArray = [
        {
        fname:"serajum",
        city:"Jhenidah ",
        age : 24
        },
        {
            fname:"Era",
            city:"shailkupa",
            age :17
        },
        {
            fname : "Ema",
            city: "Foridpur",
            age: 28
        }
    ]


    
    res.json( myJSONArray);

 })

 
 app.listen(port, function(){
   console.log('Example app listening at http://localhost:' + port)
  })