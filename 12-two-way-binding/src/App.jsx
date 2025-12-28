import React, { useState } from 'react'

const App = () => {

const[title,settitle]=useState('')


const submitHandler=(e)=>{
console.log("form submitted");

}

  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault();
        submitHandler(e)
        }}>
        <input type="text" placeholder='enter your name'  value={title} onChange={(e)=>{
          console.log(e.target.value);
          
        }}/> 
        <button>Submit</button>

      </form>
    </div>
  )
}

export default App
