const { Server } = require('socket.io')
const io = new Server({ cors: "http://localhost:5173" })

io.on('connection', (socket) => {
    console.log("connected", socket.id)
})

io.listen(3000)
