import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/hello');
      const data = await response.text();
      setMessage(data);
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error fetching message');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          onClick={fetchMessage}
          style={{ padding: '10px 20px', margin: '20px', fontSize: '16px' }}
        >
          Fetch Message
        </button>
        {message && <p>{message}</p>}
      </header>
    </div>
  );
}

export default App;
