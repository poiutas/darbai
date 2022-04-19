import React, {useState} from 'react'

function Nd2() {
  const [count, setCount] = useState(0)
  const [hatecount, setHatecount] = useState(0)
  function plusCount(){
    setCount(count + 1)
  }
  function plusHatecount(){
    setHatecount(hatecount + 1)
  }
  function resetCount(){
    setCount(0);
    setHatecount(0);
  }
  return (
    <div className='border col-4'>
      <h3>Post</h3>
      <p className=' text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, obcaecati ratione? Velit, fugit ipsum, atque quisquam, sunt placeat nesciunt numquam illo quas ullam maiores ea exercitationem quod omnis quam officia.</p>
      <button className='bg-success m-1' onClick={plusCount}> Like {count}</button>
      <button className='bg-danger m-1' onClick={plusHatecount}> Hate {hatecount} </button>
      <button className='bg-info m-1' onClick={resetCount}>Reset</button>
    </div>
  )
}

export default Nd2
