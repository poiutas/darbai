import React, { useState } from 'react'

function LessText(props){
    const [gone, setGone] = useState(false)
    let {maxLength, text} = props
function changeText(){
    setGone(!gone)
}


  return (
    <div>
        
       <p className='col-3 border'>
         {gone ? text : `${text.substring(0,maxLength)}`} 
         <button  onClick={changeText}> {gone ? "read less" : "read more"}</button>
       </p>
        
    </div>
  )
  }

export default LessText;