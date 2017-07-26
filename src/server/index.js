import React from 'react'
import Express from 'express'
import { Server as HttpServer } from 'http'
import { default as SocketIOServer } from 'socket.io'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { Page } from './components'
import RootContainer from '../shared/containers'
import store from '../shared/store'
// import favicon from '../shared/assets/favicon.ico'
// const fs = require('fs')
const path = require('path')

const app = new Express()
const http = new HttpServer(app)
const io = new SocketIOServer(http).of('/booty-ws')

const assetsPath = path.join(__dirname, process.env.ASSETS_PATH)
const staticPath = path.join('./', assetsPath)
console.log('relative lol', staticPath)
app.use('/assets', Express.static(staticPath))

app.get('/try-me', (req, res) => {
	res.send('<h1>Yay!!</h1>')
})

app.get('/favicon.ico', (req, res) => {
	res.send(null)
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
	const context = { }
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
