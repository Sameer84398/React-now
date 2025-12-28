import React, { useState } from 'react'

const App = () => {

const[num,setNum]=useState({user:'sameer',age:24});

const btnClickInc=()=>{
 setNum(prev=>({...prev,age:50}))
}
  return (
    <div>
      <h1>{num.user}</h1>
      <h2>{num.age}</h2>
    <button onClick={btnClickInc}>increase</button>
  
    </div>
  )
}

export default App
