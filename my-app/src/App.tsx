import React from 'react';
import './App.css';
import Inputs from './components/inputs';
import PeopleList from './components/peopleList';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>First Task</h1>
      <Inputs/>
       
    </div>
  );
}

export default App;
