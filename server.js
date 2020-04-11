const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(_dirname + '/angularapp'));

app.listen(process.env.PORT || 8080);

app.get('/*', function(req, res){
    res.sendFile(path.join(_dirname + '/angularapp/index.html'));
});

console.log('finalizo');