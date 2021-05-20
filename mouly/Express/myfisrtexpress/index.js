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

    
// app.post('/three', function(req,res){

//     let myJSONArray = [
//         {
//         fname:"serajum",
//         city:"Jhenidah ",
//         age : 24
//         },
//         {
//             fname:"Era",
//             city:"shailkupa",
//             age :17
//         },
//         {
//             fname : "Ema",
//             city: "Foridpur",
//             age: 28
//         }
//     ]


    
//     res.json( myJSONArray);

//  })


/////// upload files /////

// app.get('/five', function(req,res){
//          res.download("./upload/image/index.jpg");
//       })


      app.get("/Bangladesh", function(req,res){

        res.redirect("http://localhost:" + port +"/Shyllet")

      })

      
      app.get("/Shyllet", function(req,res){

        res.send("This is beautiful")

      })



      app.get("/six", function(req,res){


        res.append("name", "Serajum munira");
        res.append("city", "Jhenidah");
        res.append("age", "24 years old");
        
        res.status(201).end("The End!");

      })




      app.get("/seven", function(req,res){


        res.cookie("name", "Serajum munira");
        res.cookie("city", "Jhenidah");
        res.cookie("age", "24 years old");
        
        res.end("Successfully Done!");

      })



 app.listen(port, function(){
   console.log('Example app listening at http://localhost:' + port)
  })