const express = require('express')
const compression = require('compression')

const app = express()
app.use(compression())
app.use(express.static('./dist'))

app.listen(8000, () => {
    console.log('服务器：localhost:8000');
})