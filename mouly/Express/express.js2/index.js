var express = require ('express');

app = express ();



app.get('/', function(req,res){

    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    res.end(firstName + " "+lastName );


    let firstname = req.header('firstname');
    let lastname = req.header('lastname');
    res.end(firstname + " "+lastname );

})



/////// header call //////////


app.get('/one', function(req,res){

    
    let firstname = req.header('firstname');
    let lastname = req.header('lastname');
    res.end(firstname + " "+lastname );

})



/////////// post request //////////


app.post('/', function(req,res){

    res.send("This is simple post request");

});

///////// query ////////////


app.post('/two', function(req,res){

    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    res.end(firstName + " "+lastName );

});


//////// header //////////////////


app.post('/three', function(req,res){

    
    let firstname = req.header('firstname');
    let lastname = req.header('lastname');
    res.end(firstname + " "+lastname );

})


app.listen(8080,function(){
    console.log("Successfully Done!")
})

