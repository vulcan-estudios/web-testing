const express = require('express');

const server = express();

server.get('/api/users/:id', function (req, res, next) {

  const query = req.query;
  const filter = query.filter;

  // ...

  if (filter) {
    res.json({
      name: 'Pepe'
    });
  }
  else {
    res.json({
      id: '001',
      name: 'Pepe',
      email: 'email@gmail.com',
      age: 22
    });
  }
});

server.get('/api/users', function (req, res, next) {

  // ...

  res.json([
    {
      id: '001',
      name: 'Pepe',
      email: 'email@gmail.com',
      age: 22
    }, {
      id: '002',
      name: 'María',
      email: 'email@gmail.com',
      age: 20
    }
  ]);
});

server.put('/api/users/:id', function (req, res, next) {

  const id = req.params.id;
  const newData = req.body;

  // ...

  if (id !== '001') {
    res.status(400).json({ success: false });
  }
  else {
    res.json({
      success: true
    });
  }
});

server.listen(5000, function (err) {
  if (err) throw err;
  console.log('Server running at http://127.0.0.1:5000');
});
