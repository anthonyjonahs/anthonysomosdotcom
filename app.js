const express = require('express');
const pug = require('pug');
const routes = require('./routes.js')

const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.use('/', routes)
app.use(express.static(__dirname))
app.listen(3000, () => {
	console.log('Listening on 3000');
})
