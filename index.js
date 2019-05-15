const express = require('express'), 
app = express(); 

const db = require('./server/utils/database')

app.get('/', (req,res) => { 
    res.send('hello')
})


app.listen('4000', () => {
    console.log('server connect on 4000!')
})  
