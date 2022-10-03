import { useState } from 'react'

const ClickCounter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h3>Count {count}</h3>
      <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
    </div>
  )
}

export default ClickCounter
