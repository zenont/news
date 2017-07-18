import React from 'react'
import Express from 'express'
import { Server as HttpServer } from 'http'
import { default as SocketIOServer } from 'socket.io'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { Page } from '../common'
import RootContainer from '../client/containers'
import store from '../client/store'

const app = new Express()
const http = new HttpServer(app)
const io = new SocketIOServer(http).of('/booty-ws')

app.use('/assets', Express.static('static'))

app.get('/try-me', (req, res) => {
	res.send('<h1>Yay!!</h1>')
})

app.get('/', (req, res) => {
	console.log('requesting on', req.url, req.params, req.query)
	const context = {}
	const stringifiedHtml = renderToStaticMarkup(
		<Page>
			<RootContainer
				server
				store={store}
				context={context}
				location={req.url}
			/>
		</Page>
	)
	res.send(stringifiedHtml)
})

io.on('connection', (socket) => {
	console.log(`socket ${socket.id} connected!`)
	socket.broadcast.emit('USER_CONNECTED') // everyone gets it but the sender
})

const port = 3031
http.listen(port, () => {
	console.log(`listening on port ${port}`)
})
