//lecture example

var express = require('express');
var app = express();

app.use('/', function (req, res, next){ //match on '/' and anything beginning with it
    console.log('Request:', req.method, req.path);
    next();
});

app.use(function (err, req, res, next){ //match on '/' and anything beginning with it
    console.error(err.msg);
    res.sendStatus(err.status);
});

app.get('/', function (req, res, next){ //match on only '/'
    res.send('sending res')
});

app.listen(3000, function(){
    console.log('The server started')
});
