import Express from 'express'
import { Server as HttpServer } from 'http'
import { default as SocketIOServer } from 'socket.io'
import { ssr } from './middlewares'
const path = require('path')

const app = new Express()
const http = new HttpServer(app)
const io = new SocketIOServer(http).of('/booty-ws')

const assetsPath = path.join(__dirname, process.env.ASSETS_PATH)
const staticPath = path.join('./', assetsPath)
app.use('/assets', Express.static(staticPath))

app.get('/try-me', (req, res) => {
	res.send('<h1>Yay!!</h1>')
})

app.get('/favicon.ico', (req, res) => {
	res.send(null)
})

app.get('*', ssr())

io.on('connection', (socket) => {
	console.log(`socket ${socket.id} connected!`)
	socket.broadcast.emit('USER_CONNECTED') // everyone gets it but the sender
})

const port = 3031
http.listen(port, () => {
	console.log(`listening on port ${port}`)
})
