const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');



const app = express();

app.use(cors());
app.use(bodyParser.json());
const user = ['sakib', 'hasan']
const pass = 'muYRh4HC8K527OJp';
const dbUser = 'dbUser';
//dbConection

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbUser:muYRh4HC8K527OJp@cluster0-gdpcz.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("onlineStore").collection("products");
    console.log('database loaded');
    // perform actions on the collection object
    client.close();
});


app.get('/', (req, res) => {
    res.send("thank");
});
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const name = user[id];
    res.send({ id, name });
})


app.post('/addUser', (req, res) => {
    const user = req.body;
    user.id = 2;
    res.send(user);
})

// app.get('/product/:id', (req, res) =>{
//     const id = req.params.id;    

//     const name = users[id];
//     res.send({id, name});
// });


//const port = process.env.PORT || 4200;
app.listen(3000, () => console.log('Listenting to port 3000'));