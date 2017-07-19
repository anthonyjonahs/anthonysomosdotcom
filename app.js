const express = require('express');
const pug = require('pug');
const routes = require('./routes.js')

const app = express()
const PORT = process.env.PORT || 3000

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.use('/', routes)
app.use(express.static(__dirname))
app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
})
