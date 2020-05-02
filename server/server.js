// server.js
const express = require('express');
const bodyParser = require('body-parser');

// Our DB Configuration
require('./src/database');

// Routes
const postRouter = require('./src/routes/post.js');

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hello World ! ');
});

app.listen(PORT, function () {
  console.log(`Server Listening on ${PORT}`);
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.use('/posts', postRouter);
