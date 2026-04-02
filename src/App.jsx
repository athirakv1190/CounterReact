import React, { useState } from 'react'

const App = () => {
  const [count,setCount] = useState(0)

function Increment(){
      setCount(PrevCount=>PrevCount+1)
}
function Decrement(){
      setCount(PrevCount=>PrevCount== 0 ? 0 :PrevCount-1)
}
function Reset(){
  setCount(0)
}


  return (
    <div>
      <h1>Counter Application</h1>
      <h1>I am from GitHub</h1>
      <p>Heloo its Counter </p>
      <h1>Count {count}</h1>
      <button onClick={Increment}>INCREMENT</button>
      <button onClick={Decrement}>DECREMENT</button>
      <button onClick={Reset}>RESET</button>


    </div>
  )
}

export default App
