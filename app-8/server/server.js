const express = require('express')
const app = express()
const port = 4444
const ctrl = require('./controller')
app.use(express.json())

app.get('/api/characters',ctrl.getThings)
app.listen(port,() => console.log(`this is ${port}`))

