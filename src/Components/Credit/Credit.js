import React, { useState } from 'react'
import './Credit.css'

function Credit() {
  const [dateState, useDateState] = useState(new Date())

  return (
    <div className='credit'>
        <h5 id='copy'>&copy; {dateState.toLocaleString('en-US', {year: 'numeric'})}</h5>
    </div>
  )
}

export default Credit