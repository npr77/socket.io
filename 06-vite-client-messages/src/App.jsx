import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import io from 'socket.io-client';

function App() {
  const [count, setCount] = useState(0)


  const socket = io.connect('http://localhost:3000');




  // Function to handle sending a message to the server
  const sendMessage = () => {
    socket.emit('message', 'Hello, this is a message from the client!');
  }

  socket.on('message-from-server', function (msg) {
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  });

  return (
    <>
      <h1>socket.io</h1>
      <div className="card">
        <button onClick={sendMessage}>
          Send message to server
        </button>
        <ul id="messages"></ul>
      </div>
    </>
  )
}

export default App
