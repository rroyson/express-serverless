var express = require('express')
var app = express()

app.get('/', function(req, res) {
  res.send({
    Output: 'This is the Output!'
  })
})

app.post('/', function(req, res) {
  res.send({
    Output: 'Hello World!'
  })
})

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
