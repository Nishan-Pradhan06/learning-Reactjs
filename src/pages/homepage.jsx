import React, { useState } from 'react'
import Buttons from '../components/Buttons'
const HomePage = () => {

  const [count, setCount] = useState(0) //hook useState
  return (
    <div>
      <h1>This is Homepage</h1>
      <Buttons ButtonText="HomePage" />

      <h1>{count}</h1>
      {/* <Buttons ButtonText="Count" onClick={() => setCount(count + 1)} /> */}
      <button className='my-button' onClick={() => setCount(count + 1)}>Count</button>


    </div>
  )
}

export default HomePage