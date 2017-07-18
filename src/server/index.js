import React from 'react'
import Express from 'express'
import { Server as HttpServer } from 'http'
import { default as SocketIOServer } from 'socket.io'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { Page } from '../common'
import RootContainer from '../client/containers'
import store from '../client/store'
const fs = require('fs')
const path = require('path')

const app = new Express()
const http = new HttpServer(app)
const io = new SocketIOServer(http).of('/booty-ws')

const assetsPath = path.join(__dirname, '../dist', 'assets')
const staticPath = path.join('./', assetsPath)
console.log('relative lol', staticPath)
app.use('/assets', Express.static(staticPath))

app.get('/try-me', (req, res) => {
	res.send('<h1>Yay!!</h1>')
})

app.get('/', (req, res) => {
	res.writeHead(301, {
		Location: req.url + 'home'
	})
	res.end()
})

app.get('*', (req, res) => {
	/*fs.readFile(path.join('./', assetsPath, 'index.html'), 'utf8', (err, data) => {
		console.log('assetsPath', assetsPath)
		if (err) {
			return console.log(err)
		}

		console.log(data)
	})*/

	console.log('requesting on', req.url, req.params, req.query)
	const context = {}
	if (context.url) {
		console.log('redirecting on', context.url, req.url, req.params, req.query)
		res.writeHead(301, {
			Location: context.url
		})
		res.end()
	} else {
		console.log('SSR on', req.url, req.params, req.query)
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
	}
})

io.on('connection', (socket) => {
	console.log(`socket ${socket.id} connected!`)
	socket.broadcast.emit('USER_CONNECTED') // everyone gets it but the sender
})

const port = 3032
http.listen(port, () => {
	console.log(`listening on port ${port}`)
})
