import React, { useEffect } from 'react'
import './NavigationBar.css'
import {FaArrowUp} from 'react-icons/fa'

function NavigationBar() {
  useEffect(() => {
    window.onscroll = function() {
        document.getElementById('topscroll').style.transition = "0.5s"
        if (window.pageYOffset >= document.getElementById("navbar").offsetHeight) {
            document.getElementById('topscroll').style.visibility = "visible"
            document.getElementById('topscroll').style.opacity = "1"
        } else {
            document.getElementById('topscroll').style.visibility = "hidden"
            document.getElementById('topscroll').style.opacity = "0"
        }
    };
  })
    
  return (
    <>
        <nav id='navbar'>
            <div className='logo'>
                <div>
                    <h1 className='logo-title'>Rizky Aditya</h1>
                    <hr className='title-line' />
                </div>
            </div>
            
            <div className='nav-links'>
                <a href='#statistic' className='nav-link'>Coding</a>
                <a href='#certification' className='nav-link'>Certification</a>
                <a href='#footer' className='nav-link'>Contact</a>
            </div>
        </nav>

        <div className='topscroll' id='topscroll' onClick={() => {window.scrollTo(0, 0)}}><FaArrowUp size={25} /></div> 
    </>
  )
}

export default NavigationBar