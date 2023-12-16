const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.text());

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });

app.get('/order', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.status(200).send(
        "Hello World Order Service!"
    );
});