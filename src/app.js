var express = require('express');
const bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);
const path = require('path');


var app = express();

app.use(bodyParser.xml({
xmlParseOptions: {
normalize: true, 
normalizeTags: true, 
explicitArray: false, 
}
}));

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/views/index.html');
});

app.post('/', function (req, res, body) {
    console.log(req.body)
    console.log(req.body.__proto__)
    res.send(req.body);

});

app.listen(3000, function () {
    console.log('3000: Running');
  });

