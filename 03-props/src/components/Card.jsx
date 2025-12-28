import React from 'react'

const Card = (props) => {
  console.log(props);
  return (
   
      <div className='card'>
              <img src='https://images.unsplash.com/photo-1634848860108-6d8368f5a0b3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
              sameer   patnail mkkhdggd
              <h1>{props.user}</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quisquam, ducimus ad reprehenderit !</p>
              <button>View profile </button>
            </div>
   
  )
}

export default Card
