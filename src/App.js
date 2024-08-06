import { useState } from 'react';

/**
 * The code in App.js creates a component. In React, a component is a piece of reusable code that represents a part of a user interface. Components are used to render, manage, and update the UI elements in your application.
*/

function Square({ value }) {
  function handleClick() {
    console.log('clicked!');
  }
  return ( <button className="square"
  onClick={handleClick}
  >
    {value}
    </button>
  );
}


export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
     </div>
     <div className="board-row">
       <Square value="4" />
       <Square value="5" />
       <Square value="6" />
     </div>
     <div className="board-row">
       <Square value="7" />
       <Square value="8" />
       <Square value="9" />
     </div>
    </>
  );
}
