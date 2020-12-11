import React, {useState} from 'react'
import './App.css';

import Interval from './components/Interval'
import Average from './components/Average'
import Sum from './components/Sum'
import Draw from './components/Draw'


function App() {

  const [min, setMin] = useState(10)
  const [max, setMax] = useState(20)

  return (
    <div className="App">
      <h1>Exercise React-Redux (Simple)</h1>
      <div className="line">
        <Interval min={min} max={max} onMinChanged={setMin} onMaxChanged={setMax}/>
      </div>
      <div className="line">
        <Average min={min} max={max}/>
        <Sum min={min} max={max}/>
        <Draw min={min} max={max}/>
      </div>
    </div>
  );
}

export default App;