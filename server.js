var express = require('express'),
app = express();

app.use(express.static('build'));

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// API Routes
// app.get('/blah', routeHandler);


app.listen(process.env.PORT || 5000, function () {
    console.log('Express server listening on port ' + app.get('port'));
});