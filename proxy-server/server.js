const express = require('express');
const proxy = require('http-proxy-middleware');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 8081;

app.use(cors);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/:listingId', (req, res) => {
  res.sendFile(path.join(`${__dirname}/public/index.html`));
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
