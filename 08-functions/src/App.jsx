import React from 'react'

const App = () => {
 function btnClicked(){
    console.log('button clicked')
 }
function mouseEnter(){
    console.log('mouse entered')
}

  return (
    <div>
      Hello World
      <button onClick={btnClicked} onMouseEnter={mouseEnter}>click</button>
    </div>
  )
}

export default App
