import React from 'react'
import './Header.css'
import Rizaps from '../../Assets/images/logo/Rizaps.png'

function Header() {
  return (
    <section className='header' id='header'>
        <img src={Rizaps} alt='R' className='word-art' />
        <div className='intro'>
            <h1 className='intro-title'>Rizky Aditya</h1>
            <p className='intro-subtitle'>Entry level coder</p>
            <p className='intro-text'>
              I'm currently into web programming. I still need to learn a lot on this large field. There are many things i want to learn and master. I still have a long way to go. More experience would be helpful.
            </p>
        </div>
    </section>
  )
}

export default Header