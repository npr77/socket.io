import io from 'socket.io-client';

function App() {

  const socket = io.connect('http://localhost:3000');

  return (
    <div className="App">
      Empty on purpose.
    </div>
  );
}

export default App;
