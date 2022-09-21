import React, { useState } from 'react'

function ReactComponent() {
    const [counter, useCounter] = useState(0)
  return (
    <div>
        <p>You Clicked me {counter} times</p>
        <button onClick={() => useCounter(counter + 1)}>Click me</button>
    </div>
  )
}

export default ReactComponent