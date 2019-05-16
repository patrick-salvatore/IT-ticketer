const express = require('express'), 
app = express(),
bodyParser = require('body-parser'),
db = require('./server/utils/database')

app.use(require('cors'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req,res) => { 
    res.send('hello')
})



app.listen('4000', () => {
    console.log('server connect on 4000!')
})  

 