const express = require('express'), 
app = express(),
port = 4000;

app.get('/', (req,res) => { 
    res.send('hello')
})


app.listen(port, () => {
    console.log('server connect on 4000!')
})  
