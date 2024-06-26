import React, { useState, useEffect } from 'react';
import { socket } from './socket';
import { ConnectionState } from './components/ConnectionState';
import { ConnectionManager } from './components/ConnectionManager';
import { Events } from "./components/Events";
import { MyForm } from './components/MyForm';

export default function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [messageFromServerEvents, setMessageFromServerEvents] = useState([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onMessageFromServerEvent(value) {
      setMessageFromServerEvents(previous => [...previous, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('message-from-server', onMessageFromServerEvent)

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('message-from-server', onMessageFromServerEvent)
    };
  }, []);

  return (
    <div className="App">
      <ConnectionState isConnected={isConnected} />
      <Events events={messageFromServerEvents} />
      <ConnectionManager />
      <MyForm />
      <ul id="messages"></ul>
    </div>
  );
}