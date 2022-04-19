import React from 'react';
import "./Header.css";

export default function Header(props) {
  console.log(props)
  // let {HeaderImage}
  return (
    <div>
       <h1 className='Header-title'> {props.title} </h1>
       <img className='Header-img'  /> {props.image} 
    </div>
  );
}
