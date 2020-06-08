const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');



const app = express();

app.use(cors());
app.use(bodyParser.json());
const user = ['sakib', 'hasan']
const dbUser = 'dbNowfel';
const password = 'tdcYk6UXG0RSBHfA';


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbNowfel:tdcYk6UXG0RSBHfA@cluster0-jdqdu.mongodb.net/<dbName>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("store").collection("products");
  console.log("Database connected....");
  collection.insertOne({
    name: "mobile",
    price: 300,
    stock:3
}, (err, res) => {
    console.log("inserted");
})

  client.close();
});










// var MongoClient = require('mongodb').MongoClient;

// var uri = "mongodb://dbNowfel:tdcYk6UXG0RSBHfA@cluster0-shard-00-00-jdqdu.mongodb.net:27017,cluster0-shard-00-01-jdqdu.mongodb.net:27017,cluster0-shard-00-02-jdqdu.mongodb.net:27017/<dbname>?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
// MongoClient.connect(uri, function (err, client) {
//     const collection = client.db("store").collection("products");

//     // perform actions on the collection object
    
//     client.close();
// });



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



app.listen(3033, () => console.log('Listenting to port 3000'));