import './App.css';

import Interval from './components/Interval'
import Average from './components/Average'
import Sum from './components/Sum'
import Draw from './components/Draw'


function App() {
  return (
    <div className="App">
      <h1>Exercise React-Redux (Simple)</h1>
      <div className="line">
        <Interval />
      </div>
      <div className="line">
        <Average />
        <Sum />
        <Draw />
      </div>
    </div>
  );
}

export default App;