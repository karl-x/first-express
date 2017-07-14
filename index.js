const express = require('express')
const app = express()

// all request will have to know that public folder is where we put our static files
app.use(express.static('public'))

//listening for request
// get request
app.get('/', function (req, res) {
  res.send('index.html')
})

app.get('/about/:name', function (req, res) {
  res.send(req.params)
})

app.get('/faq', function (req, res) {
  res.send('faq page')
})

// post request
app.post('/')

app.listen(3000), function () {
  console.log('express is running on port 3000');
}
