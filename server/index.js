const express = require('express'),
    bodyParser = require('body-parser'),
    reportsRoutes = require('./routes/reports'),
    sequelize = require('./utils/database'),
    cors = require('cors'),
    port = process.env.PORT || 4000
    app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/API/reports', reportsRoutes)

sequelize.sync()
    .then(_ => {
        app.listen(port, () => {
            console.log(`server connect on 4000!`)
        })
    })
    .catch(err => console.log(err))
