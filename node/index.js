const express = require('express')
const app = express()
const port = 9329

app.get('/', (req, res) => {
    res.send("<h1> Hello World </h1>")
})

app.listen(port, () => {
    console.log(`listening in: ${port}`)
})