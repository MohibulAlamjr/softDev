const mongoose = require('mongoose')

const m_url = "mongodb+srv://Sweety:1234sweety@cluster0.v0uzi.mongodb.net/mydata?retryWrites=true&w=majority"
   
    m_options = {
        'auto_reconnect': true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }

mongoose.connect(m_url, m_options, function (err) {
    if (err) {
        console.log('Mongo Error ' + err);
    } else {
        
        console.log('MongDB Connected');
    }
});
