const express = require('express');
const app = express();
const port = 5040;


// app.get('/',function(req,res){
//   res.send('Hello World!')
// })
//  app.listen(port, function(){
//   console.log('Example app listening at http://localhost:' +port)
// })


 app.get('/',function(req,res){
  res.send('Hello World!')
})

 app.post('/about',function(req,res){
  res.send('About Page')
})

 app.put('/Contact',function(req,res){
  res.send('Contact Page')
})
 app.delete('/test',function(req,res){
  res.send('Test Page')
})
 app.listen(port, function(){
  console.log('Example app listening at http://localhost:' +port)
})
