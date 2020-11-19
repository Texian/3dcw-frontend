import React from 'react';
import Header from './layout/Header';
import BladeMenu from './layout/bladeMenu';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <BladeMenu />
      </div>
    )
  }
}

export default App;
