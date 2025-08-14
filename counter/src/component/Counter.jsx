import React, { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0);
  return (
    <div className='counter'>
        <h3>Count is: {count}</h3>
        <button type="button" onClick={() => setCount(count+1)}>+</button>
        <button type="button" onClick={() => setCount(0)}>Reset</button>
        <button type="button" onClick={() => setCount(count-1)}>-</button>
    </div>
  )
}

export default Counter
