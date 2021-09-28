
import React from "react";
import LinkArray from './LinkArray';
import LinkCard from './components/Links/LinkCard';

function App() {

// JSX "Under the Hood"

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2',{},"Let's Get Started!"),
  //   React.createElement(Expenses, {items: expenses})
  // )

  return (
    <div className = "wrapper">
      
      <img src ="/images/Extrude_White_2Below_Logo.png" alt="Logo" height="100px" className="main-logo"/>
      <LinkCard items = {LinkArray}/>
      <footer></footer>
    </div>
  );
}

export default App;
