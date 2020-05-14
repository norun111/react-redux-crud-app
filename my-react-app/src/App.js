// import React from 'react';
import React, {Component} from 'react';
import './App.css';

// function App() {
//   return (
//     <div><h1 >Hello World</h1></div>
//   );
// }

class App extends Component {
  render(){
    return React.createElement(
      "h1",
      null,
      "Hello, world!"
    );
  }
}

export default App;