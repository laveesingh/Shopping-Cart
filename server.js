'use strict'

var express = require('express')
var app = express()
var path = require('path')

// MIDDLEWARE to define folder for static files
app.use(express.static('public'))

app.get('/', function(request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(3000, function(){
  console.log("Web server running on port 3000")
})
