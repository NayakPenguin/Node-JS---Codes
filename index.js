const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World, our first API is running');
});

const port = 8000;

app.listen(port, () => console.log(`Listening on localhost:${port} ...`));