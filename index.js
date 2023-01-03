const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World, our first API is running');
});

const allUsers = [
    {
        "username" : "zuck",
        "name" : "Mark Zuckerburg",
        "bio" : "I keep passwords as plain texts",
    },
    {
        "username" : "esaverin",
        "name" : "Eduardo Saverin",
        "bio" : "Hello World!",
    },
]

app.get('/user/:username', (req, res) => {
  const username = req.params.username;
  for(let i = 0; i<allUsers.length; i++){
    if(allUsers[i].username === username){
      res.send(allUsers[i]);
      break;
    }
  }
  res.send("No user found with given username");
});

const port = 8000;

app.listen(port, () => console.log(`Listening on http://localhost:${port} ...`));
