import logo from './logo.svg';
import './App.css';

import Interval from './components/Interval'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <h1>Exercise React-Redux (Simple)</h1>
      <div className="line">
        <Interval />
      </div>
      <div className="line">
        <Card title="Card 2" Green>
          X
        </Card>
        <Card title="Card 3" Blue>
          Y
          </Card>
        <Card title="Card 4" Purple>
          Y
          </Card>
      </div>
    </div>
  );
}

export default App;