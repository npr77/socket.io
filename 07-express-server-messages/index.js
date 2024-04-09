const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5173"
    }
});

io.on("connection", (socket) => {
    console.log("connected", socket.id)

    socket.on('message', (msg) => {
        console.log('Message received from client:', msg);
        // You can also broadcast the message to other clients or perform other actions
        io.emit('message-from-server', 'Message received! Thanks.')
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });

});

// routes
app.get('/', (req, res) => {
    res.send('Hello World!')
    io.emit('message-from-server', 'Root call!')

})

httpServer.listen(3000);