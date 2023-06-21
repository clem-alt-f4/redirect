const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', function (req, res) {
    res.redirect('https://vj9x3n-3000.csb.app/');
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});



