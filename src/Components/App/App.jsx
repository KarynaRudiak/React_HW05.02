import { useState } from 'react';
import './App.css'
import ValueDisplay from '../ValueDisplay/ValueDisplay';

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
        <h1>Current and Previos Value</h1>
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type something..."
        />
        <ValueDisplay value={inputValue} />
    </div>
);
}

export default App
