const express = require('express');

const app = express();
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.urlencoded({extended:true}));
app.use('/', require('./routes'));

app.listen(process.env.PORT, ()=>{
    console.log("Listening on port " + process.env.PORT + ".....")
})