const express = require('express');


const app = express();
const port = 2025;


app.get('/one', function (req, res) {
    res.end('This is simple response')
})

app.post('/two', function (req, res) {
    res.end('This is simple string response')
})



app.get('/three', function (req, res) {
    res.status('401').end('unauthorised')
})




app.get('/json', function (req, res) {

    let myJSONArray = [{
            name: "Kaium",
            city: "Dhaka",
            occupation: "Student"
        },
        {
            name: "Salam",
            city: "Barisal",
            occupation: "Student"
        },
        {
            name: "Kamal",
            city: "Barguna",
            occupation: "Student"
        }
    ]
    res.json(myJSONArray);
})

app.get("/sweety", function (reg, res) {
    res.download("./img/Sweettea.png");
})

app.get("/Dhaka", function (reg, res) {
    res.redirect("http://localhost:" + port + "/Barguna")
})
app.get("/Barguna", function (reg, res) {
    res.send("This is Barguna")
})


app.get("/Mohi", function (reg, res) {

    res.append("Name", "Kaium");
    res.append("Name", "Sweety");
    res.append("Name", "Mouly");
    res.append("Name", "Mohibul");
    res.append("Name", "Kaium");
    res.append("Name", "Sweety");
    res.append("Name", "Mouly");
    res.append("Name", "Mohibul");
    res.status(401).end("Good bye");
})




app.get("/cookie", function (reg, res) {

    res.cookie('Name',
        'Kaium')
    res.cookie('city',
        'Dhaka')
    res.cookie('age',
        50)
    res.end("Good bye");
})

app.get("/clearcookie", function (reg, res) {

            res.ClearCookie('Name');
            res.ClearCookie('city');

                res.end("Good bye");
            })



        app.listen(port, function () {
            console.log('Example app listening at http://localhost:' + port)
        })