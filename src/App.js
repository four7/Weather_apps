import React from 'react';
import './App.css';
import Forecast from './Components/Forecast/Forecast.js';
import Pic from './weather_pic_logo.jpg';
import Moment from 'react-moment';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="display-4">Weather App!</h1>
        <img src={Pic} />
      </header>
      <main>
          <Forecast />
        <footer>
          Page made by Four7
        </footer>
      </main>
    </div>
  );
}

export default App;
