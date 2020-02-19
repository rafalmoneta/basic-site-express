const express = require('express');
const routes = require('./routes/index');
const path = require("path");


const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', routes);

app.use((req, res, next) => {
    res.status(404).render('404', {page: 'Page not found'});
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});

module.exports = app;