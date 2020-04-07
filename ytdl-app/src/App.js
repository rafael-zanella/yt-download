import React, { useState } from 'react';

import './App.css';

function App() {

  const [url, setURL] = useState('');

  function sendURL(URL) {
    window.location.href = `http://localhost:4000/download?URL=${URL}`;
  }

  return (
    <div className="App">
      <h1>Downloader</h1>

      <input 
        value={url} 
        onChange={e => setURL(e.target.value)} 
        placeholder="https://www.youtube.com/watch?v=MtN1YnoL46Q" />

      <button onClick={() => sendURL(url)} >Convert</button>
    </div>
  );
}

export default App;
