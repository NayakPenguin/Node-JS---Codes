const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');

app.use(express.json());



const schema = new mongoose.Schema({ //---> basically just line datatype of a variable / structure
    name: String,
    age: Number, // -----> Here int is represented as Number
    company: String,
    dataId: String,
});



const Collection = new mongoose.model("Collection", schema);



app.get('/', (req, res) => {
    res.send('<div style="color:#333; font-size:16px;">You have successfully entered the <b>MongoDB world . . .</b><div>');
});

app.post('/post', (req, res) => {
    const { name, age, company } = req.body;
    console.log(req.body);
    
    const firstPostObject = new Collection({
        name: name,
        age: age, 
        company: company,
        dataId: uuidv4(),
    })

    firstPostObject.save().then(() => {
        res.json(req.body);
    }).catch((err) => res.json({error : "Can't save to mongo!"}));
})

app.get('/get-data', (req, res) => {
    Collection.find({},(err,result)=>{res.status(200).json(result.reverse())});
})










// ------------------------------------------------ CONNECTION BELOW ------------------------------------------------



const CONNECTION_URL = 'mongodb+srv://nobodycares:nobodycares@new1.7iwujpr.mongodb.net/?retryWrites=true&w=majority';

const port = process.env.PORT || 8000;

app.listen(port , ()=> {
    console.log(`App Listening at http://localhost:${port}...`)
    mongoose.connect(CONNECTION_URL,{
        useNewUrlParser: true ,
        useUnifiedTopology: true
    }).then(()=>{
        console.log('MongoDB Connection Successful !!!')
    }).catch((err)=> console.log(err))
  })