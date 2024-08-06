import { useState } from 'react';

/**
 * The code in App.js creates a component. In React, a component is a piece of reusable code that represents a part of a user interface. Components are used to render, manage, and update the UI elements in your application.
*/

function Square() {
  //value starts off equal to null.
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
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
        <Square />
        <Square />
        <Square />
     </div>
     <div className="board-row">
       <Square />
       <Square />
       <Square />
     </div>
     <div className="board-row">
       <Square />
       <Square />
       <Square />
     </div>
    </>
  );
}
