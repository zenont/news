import React from 'react'
import Express from 'express'
import { Server as HttpServer } from 'http'
import { default as SocketIOServer } from 'socket.io'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Page } from '../common'

const app = new Express()
const http = new HttpServer(app)
const io = new SocketIOServer(http).of('/booty-ws')

app.get('*', (req, res) => {
	const context = {}
	const html = renderToStaticMarkup(
		<Page>
			<StaticRouter
				location={req.url}
				context={context}
			>
			</StaticRouter>
		</Page>
	)
	console.log('html', html)
	// res.send(file.toString())
	const { url } = req
	res.send(html)
})

app.get('/try-me', (req, res) => {
	res.send('<h1>Yay!!</h1>')
})

io.on('connection', (socket) => {
	console.log(`socket ${socket.id} connected!`)
	socket.broadcast.emit('USER_CONNECTED') // everyone gets it but the sender
})

const port = 3031
http.listen(port, () => {
	console.log(`listening on port ${port}`)
})
