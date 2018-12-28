let express = require('express');

let app = express()

app.use(express.static('SITE'))

app.listen(3000)