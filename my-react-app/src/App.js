// import React from 'react';
import React from 'react';
import './App.css';

// function App() {
//   return (
//     <div><h1 >Hello World</h1></div>
//   );
// }

// class App extends Component {
//   render(){
//     return(
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" className="bar" onChange={function(){console.log("I am clicked")}} />
//       </React.Fragment>
//     )
//   }
// }

function App(){
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

function Cat(){
  return <div>Meow!</div>
}

export default App;