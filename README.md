# socket.io
A few examples of socket.io client server communication

I ran into problems integrating the socket.io client with my vite frontend and node.js backend, so I decided to write some simple code examples that work.

Each running client / server combination should work, i.e. the server should log a connected message with the id.

The issue was, that in my express I still had the app.listen from the express Hello World example, but needed httpServer.listen as the httpServer is the instance that socket.io gets bound to. Facepalm. But yeah, problem solved.

The last two projects, a React client and Express server labeled "messages", provide an example how to send and receive messages from both client and server.
