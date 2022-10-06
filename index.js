const express = require('express');
const app = express();

const data = [
    {
        name: "Atanu Nayak", 
        age: "19",
        company: "Nayak Enterprises",
        dataAddress: "wzaa21k92Army82",
    },
    {
        name: "Elon Musk", 
        age: "51",
        company: "Tesla Motors",
        dataAddress: "wzaa21k92Army034",
    }
]

app.get('/', (req, res) => {
    res.send('Hello World, this is Atanu Nayak');
});

app.get('/data', (req, res) => {
    res.send(data);
});

// app.get('/data/:dataNumber/:random', (req, res) => {
//     res.send(req.params);
// });

app.get('/data/:dataNumber', (req, res) => {
    res.send(data[req.params.dataNumber - 1]);
});

app.get('/data/findByDataAddress/:dataAddress', (req, res) => {
    const req_data = data.find(c => c.dataAddress == req.params.dataAddress);

    // req.params.dataAddress - By default is in string 

    if(!req_data) res.status(404).send('No data is linked to the given dataAddress');

    
    res.send(req_data);
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));