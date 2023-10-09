import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { increment, decrement } from './redux/actions'
import { handleIncrement } from './actions/counterActions'

const App = () => {
  const count = useSelector(state => state.count)
  
  // alternative reducer

  // const count = useSelector(state => state.counterReducer)
  const dispatch = useDispatch()

  return (
    <div>
      {/* <h1>Counter App</h1> */}
      <p>Count: {count}</p>
      <button onClick={() => dispatch(handleIncrement())}>Increment</button>
      {/* <button onClick={() => dispatch(handleDecrement())}>Decrement</button> */}
    </div>
  )
}

export default App
