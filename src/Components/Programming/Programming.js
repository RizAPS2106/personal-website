import React from 'react'
import './Programming.css'
import { PHP, Laravel, CodeIgniter, Go, Gin, Html, Css, Bootstrap, Javascript, Jquery, ReactLogo, Java } from '../imports'

function Programming() {
  return (
    <div className='programming'>
        <h1 className='title'>Programming Languages</h1>
        <hr className='title-line' />
        <div className='learn-languages'>
          <div className='learn-language php current'>
            <img src={PHP} className='img-language' alt='php' />
            <ul className='framework-library'>
              <li className='current'><img src={Laravel} className="img-framelib" alt='laravel' /> Laravel</li>
              <li><img src={CodeIgniter} className="img-framelib" alt='codeigniter' /> CodeIgniter</li>
            </ul>
          </div>

          <div className='learn-language html current'>
            <img src={Html} className='img-language' alt='html' />
          </div>

          <div className='learn-language css current'>
            <img src={Css} className='img-language' alt='css' />
            <ul className='framework-library'>
              <li className='current'><img src={Bootstrap} className="img-framelib" alt='bootstrap' /> Bootstrap</li>
            </ul>
          </div>

          <div className='learn-language js current'>
            <img src={Javascript} className='img-language' alt='php' />
            <ul className='framework-library'>
              <li><img src={Jquery} className="img-framelib" alt='jquery' /> Jquery</li>
              <li className='current'><img src={ReactLogo} className="img-framelib" alt='react js' /> React</li>
            </ul>
          </div>
          
          <div className='learn-language go'>
            <img src={Go} className='img-language' alt='golang' />
            <ul className='framework-library'>
              <li><img src={Gin} className="img-framelib" alt='gin' /> Gin</li>
            </ul>
          </div>

          <div className='learn-language java'>
            <img src={Java} className='img-language' alt='php' />
          </div>
        </div>
    </div>
  )
}

export default Programming