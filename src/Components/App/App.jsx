import { useState } from 'react';
import './App.css'
import ValueDisplay from '../ValueDisplay/ValueDisplay';

function App() {
    const [inputValue, setInputValue] = useState("");
    const [savedValue, setSavedValue] = useState("");

    const handleSave = () => {
        setSavedValue(inputValue);
    };

    return (
        <div>
            <h1>Current and Previous Value</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type something..."
            />
            <button onClick={handleSave}>Save</button>
            <ValueDisplay value={savedValue} />
        </div>
    );
}

export default App;
