const express = require('express');

const PORT = 4909;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from the server')
})

const server = app.listen(PORT, () => {
    console.log(`server running`)
})

module.exports = { app, server };