// import React from 'react';
import React from 'react';
import './App.css';

function App(){

  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 5},
    {name: "Hanako"}
  ]
  return (
    <div>
      {
        profiles.map(function(profile, i){
          return  <User name={profile.name} age={profile.age} key={i}/>
        })
      }
    </div>
  )
}

function User(props){
  return(
    <div>
      <p>Hi, I am {props.name} and {props.age} old</p>
    </div>
  ) 
}

User.defaultProps = {
  age: 1
}

export default App;