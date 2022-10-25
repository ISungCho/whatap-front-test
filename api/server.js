const express = require('express')
const cors = require('cors')
const profile = require('../json/transaction_profile.json')
const zoo = require('../json/zoo.json')

const app = express()
const server = require('http').createServer(app)

app.use(cors())

app.get('/api/get/zoo', (req, res) => {
	res.send({ data: zoo })
})

app.get('/api/get/profile', (req, res) => {
	res.send({ data: profile })
})

server.listen(5000, () => {
	console.log('Server is Running on 5000')
})
