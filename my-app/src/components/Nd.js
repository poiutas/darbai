import React from 'react';
import { useState } from 'react';
import "./nd.css"

function Nd() {
    const [color, setColor] = useState(false);
    

    function changeColor(){
        setColor(!color)
        
    }
    

  return (
    <div className='col-4 border rounded text-center'>
    <h3 >Task is {color ? "DONE!" : "NOT DONE!"}</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores obcaecati eveniet rerum similique repellendus qui assumenda cupiditate dolorem autem excepturi adipisci ipsum commodi exercitationem soluta, ducimus voluptate et velit voluptatibus?</p>
        
        <button className={color ? "bg-success" : "bg-danger"}  onClick={changeColor} >{color ? "DONE" : "Mark as done"}</button>
    </div>
  )
}

export default Nd