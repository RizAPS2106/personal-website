import React from 'react'
import './Software.css'
import { VisualStudio, SublimeText } from '../imports'

function Software() {
  return (
    <div className='software'>
        <h1 className='title'>Tools</h1>
        <hr className='title-line' />
        <div className='tools'>
            <div className='tool current vs'>
              <img src={VisualStudio} alt='visual studio' className='img-tool' />
            </div>
            <div className='tool sublime'>
              <img src={SublimeText} alt='sublime text' className='img-tool' />
            </div>
        </div>
    </div>
  )
}

export default Software