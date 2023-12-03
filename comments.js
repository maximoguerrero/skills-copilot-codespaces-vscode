// Create web server
// Run: node comments.js
// ========================================

// Import modules
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

// Create web server
var app = express();

// Configure web server
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// Create routes
app.get('/get-comments', function(req, res){
    console.log('GET request received at /get-comments');
    res.setHeader('Content-Type', 'application/json');
    res.sendFile(__dirname + '/comments.json');
});

app.post('/post-comment', function(req, res){
    console.log('POST request received at /post-comment');
    res.setHeader('Content-Type', 'application/json');
    var comment = {
        'name': req.body.name,
        'message': req.body.message,
        'timestamp': new Date()
    };
    console.log(comment);
    fs.readFile(__dirname + '/comments.json', function(err, data){
        if (err){
            console.log(err);
            return;
        }
        var comments = JSON.parse(data);
        comments.push(comment);
        fs.writeFile(__dirname + '/comments.json', JSON.stringify(comments), function(err){
            if (err){
                console.log(err);
                return;
            }
            console.log('Comment added');
            res.send(JSON.stringify(comments));
        });
    });
});

// Start web server
var server = app.listen(8080, function(){
    console.log('Web server listening at http://%s:%s', server.address().address, server.address().port);
});