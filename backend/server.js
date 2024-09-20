const express = require('express');
const bodyParser = require('body-parser')

//routers
const routerProfessional = require('./routes/professional')
const routerBase = require('./routes/base')

const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

//routes
app.use('/', routerBase)
app.use('/professional', routerProfessional)

app.listen(port);
console.log('Web Server is listening at port ' + port);
