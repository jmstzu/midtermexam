import React, { useState } from 'react';
import './App.css';

function Key({ label, clickHandler }) {
  return (
    <button onClick={clickHandler}>
      {label}
    </button>
  );
}

function Display({ display }) {
  return (
    <div className="Display">
      {display}
    </div>
  );
}

function NameHeader() {
  return (
    <div className='NameTitle'>
      <h1>JOHN MARK SALAS BSIT - 3A</h1>
    </div>
  );
}

function App() {
  const [disp, setDisp] = useState(0);
  const items = [
    'Being On Time',
    'Making An Effort',
    'Being High Energy',
    'Having A Positive Attitude',
    'Being Passionate',
    'Using Good Body Language',
    'Being Coachable',
    'Doing A Little Extra',
    'Being Prepared',
    'Having A Strong Work Ethic',
  ];

  const nameClickHandler = (e) => {
    e.preventDefault();
    setDisp("JOHN MARK SALAS");
  };

  const genericClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (value === 'RESET') {
      setDisp('10 Things That Require Zero Talent');
      return;
    }

    const index = parseInt(value) - 1; // Adjusted to make it 1-based
    if (index >= 0 && index < items.length) {
      setDisp(items[index]);
    }
  };

  return (
    <div className="App">
      <div className="CalcContainer">
        <div>
          <NameHeader />
        </div>
        <div className="DispContainer">
          <Display display={disp} />
        </div>
        <div className="ButtonsContainer">
          {items.map((item, index) => (
            <Key key={index} label={index + 1} clickHandler={genericClickHandler} /> // Adjusted label
          ))}
          <Key label={"RESET"} clickHandler={genericClickHandler} />
          <Key label={"NAME"} clickHandler={nameClickHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
