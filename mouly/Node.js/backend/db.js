const mongoose = require('mongoose')

const m_url = "mongodb+srv://mouly:monshemou25@cluster0.qcghe.mongodb.net/cab_bookingdatabase?retryWrites=true&w=majority"
   
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
        
        console.log('MongoDB Connection Established');
    }
});






