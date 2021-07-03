import React, { Component } from 'react';
import CardContent from './Components/CardContent';
import HeaderContent from './Components/HeaderContent';

class App extends Component {
  render(){
    return (
      <div>
        <HeaderContent />
        <br />
        <CardContent />
      </div>
    );
  }
}

export default App;
