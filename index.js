var express = require(`express`);
var app = express();
var mongoose = require('mongoose');
//DB setup
mongoose.connect('mongodb://db:27017');
app.get('/', function(req, res) {
    res.send("Hellddelldddelldd sss ss ss");
});
app.listen(4000, function() {
    console.log('Example app listening on port 3000!');
    console.log(mongoose.connection.readyState);
});

module.exports =app;