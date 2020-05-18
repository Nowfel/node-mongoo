const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');



const app = express();

app.use(cors());
app.use(bodyParser.json());
const user = ['sakib', 'hasan']


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