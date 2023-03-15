const express = require('express');
const bodyParser = require('body-parser');
const usersRoute =require('./routes/users');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());


app.get('/',(req,res)=>{
    console.log('Test!');
    res.send('Hello From Home Page!!');
});


app.use('/users',usersRoute);

app.listen(PORT,()=>console.log(`Server Running On Port: http://localhost:${PORT}`));

