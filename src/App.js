import React, { Component } from 'react';
//importing Menu Component from Components folder
import Main from './components/MainComponent';
import './App.css';



class App extends Component {

 

render() {
  return (
    <div>
      
       {/*to render the menu on the screen*/}
       <Main />
    </div>
  );
}
}

export default App;
