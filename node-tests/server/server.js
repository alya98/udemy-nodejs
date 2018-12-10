const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({
    error: 'page not found',
    name: 'todo app'
  });
});

app.get('/users', (req, res) => {
  res.send([{
    name: 'Alina',
    age: 20,
  }, {
    name: 'Artem',
    age: 15,
  },
  {
    name: 'Natasha',
    age: 45,
  }]);
});

app.listen(3000);

module.exports.app = app;