const express = require('express');
const app = express();

// https://www.youtube.com/watch?v=pKd0Rpw7O48 - Watch this video 

// https://www.youtube.com/watch?v=l8WPWK9mS5M



app.use(express.json()); //middle ware - for reading the content from post body

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


app.post('/data/add/', (req, res) => {
    const postData = {
        name : req.body.name, 
        age : req.body.age,
        company : req.body.company,
        dataAddress : req.body.dataAddress,
    };

    data.push(postData);
    res.send(data);
})

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));