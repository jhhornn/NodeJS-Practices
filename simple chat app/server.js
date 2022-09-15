const fs = require('fs');
const express = require('express');
const EventEmitter = require('events');
const { request } = require('http');
const chatEmitter = new EventEmitter();

const port = process.env.PORT || 3000;

const app = express();

app.get('/chat', respondChat);
app.get('/sse', respondSSE);

app.listen(port, () => console.log('Server listening on port ' + port));


function respondChat(req, res) {
    const { message } =req.query

    chatEmitter.emit('message', message)
    res.end()
}

function respondSSE(req, res) {
    request.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Connection': 'keep-alive'
    })

    const onMessage = msg => res.write(`data: ${msg}\n\n`)
    chatEmitter.on('message', onMessage)

    res.on('close', () => {
        chatEmitter.off('message', onMessage)
    })
}