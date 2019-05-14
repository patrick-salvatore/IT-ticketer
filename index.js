const express = require('express'), 
app = express(); 

const db = require('./server/utils/database')

app.get('/', (req,res) => { 
    res.send('hello')
})

db.execute('SELECT * FROM IT_REPORTS.REPORTS')
    .then(data => console.log(data[0][0]))
    .catch(err => console.log(err))



app.listen('4000', () => {
    console.log('server connect on 4000!')
})  
