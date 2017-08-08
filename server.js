var express = require("express")
var logger = require("morgan")
var bodyParser = require("body-parser")

var app = express()

app.get('/', function(request, response){
    //response.send('<h1>Carnasie Eats<h1>')
    response.render('home.ejs')
})

app.set('view engine', 'ejs')

app.use (express.static('views'))
app.set ('views', __dirname + '/views')
app.use(logger('dev'))

var port = process.env.PORT || 8080

app.listen(port, function(){
    console.log (`App running on ${port} hamsters`)
})

//use npm init
//use npm install --save express ejs morgan body-parser
//may need to use npm install firebase-admin