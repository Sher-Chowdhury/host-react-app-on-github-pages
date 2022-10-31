import logo from './logo.svg';
import './App.css';
import React from 'react';


function App() {
  // State: a counter value
  const [counter, setCounter] = React.useState(0)

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    setCounter(prevCounter => prevCounter + 1)
    // This console-log only appears on the chrome's developer tool's console tab.
    console.log("increment successful!!!!!")
  }

  // View: the UI definition
  return (
      <div>
        Value: {counter} <button onClick={increment}>Increment</button>
      </div>
  )
}

export default App;
