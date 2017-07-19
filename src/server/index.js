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
app.use('/assets', Express.static(staticPath))
/*
app.get('/', (req, res) => {
	res.writeHead(302, {
		Location: '/home'
	})
	res.end()
})*/
app.get('*', (req, res) => {
	const context = {}
	console.log('requesting on', req.url, req.params, req.query, context)

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

	if (context.url) {
		console.log('redirecting on', context.url, req.url, req.params, req.query)
		res.writeHead(302, {
			Location: context.url
		})
		res.end()
	} else {
		console.log('SSR on', req.url, req.params, req.query)

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
