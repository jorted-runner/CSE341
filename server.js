const express = require('express');
const app = express();

const router = require('./routes')

const port = process.env.PORT || 8080;

app.use('/', router)
app.use('/professional', router)

app.listen(port);
console.log('Web Server is listening at port ' + port);
