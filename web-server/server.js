const express = require('express');

const app = express();

app.use(express.static(__dirname+'/public'));

app.get('/', (request, response) => {
  response.send('<h1>hello i am alino4ka</h1>')
});

app.get('/about', (req,res) => {
  res.send('about page')
})

app.get('/bad', (req,res) => {
  res.send({
    error: 'unable to handle the request'})
})

app.listen(3000, () => {
  console.log('server is running on port 3000')
});