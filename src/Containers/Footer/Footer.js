import React from 'react'
import Contact from '../../Components/Contact/Contact'
import Credit from '../../Components/Credit/Credit'
import './Footer.css'

function Footer() {
  return (
    <section className='footer' id='footer'>
        <div className='container'>
            <Contact />
            <Credit />
        </div>
    </section>
  )
}

export default Footer