import React, {useEffect, useRef, useState} from 'react'
import './Certification.css'
import {GolangCertificate1, GolangCertificate2, ResponsiveWebDesignCertificate} from '../imports'
import {GrClose} from 'react-icons/gr'

function Certification() {
  const golangcert1 = useRef()
  const golangcert2 = useRef()
  const responsivecert = useRef()
  const [zoom, setZoom] = useState(false)

  useEffect(()=>{
      if(zoom === true) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
  })

  const zoomCertificate = async (imgref) => {
      setZoom(!zoom)

      if(imgref === golangcert1) {
        golangcert1.current.style.display = 'block'
        golangcert2.current.style.display = 'block'
        responsivecert.current.style.display = 'none'
      } else {
        golangcert1.current.style.display = 'none'
        golangcert2.current.style.display = 'none'
        responsivecert.current.style.display = 'block'
      }
  }

  return (
    <section className='certification' id='certification'>
        <div className='container'>
            <h1 className='title'>Certification</h1>
            <hr className='title-line' />
            <div className='certificates'>
                <div className='certificate' onClick={() => zoomCertificate(golangcert1)}>
                    <img src={GolangCertificate1} className='img-certificate' alt='golang certificate' />
                    <div className='overlay'>
                        <h3>Golang Certificate</h3>
                        <p>April 2022</p>
                    </div>
                </div>
                <div className='certificate' onClick={() => zoomCertificate(responsivecert)}>
                    <img src={ResponsiveWebDesignCertificate} className='img-certificate' alt='responsive web design certificate' />
                    <div className='overlay'>
                        <h3>Responsive Web Design Certificate</h3>
                        <p>November 2022</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='certificates-zoom' style={{display: zoom ? 'flex' : 'none'}}>
            <div className='certificate-zoom' ref={golangcert1}>
                <img src={GolangCertificate1} className='img-certificate-zoom' alt='golang certificate' />
            </div>
            <div className='certificate-zoom' ref={golangcert2}>
                <img src={GolangCertificate2} className='img-certificate-zoom' alt='golang certificate' />
            </div>
            <div className='certificate-zoom' ref={responsivecert}>
                <img src={ResponsiveWebDesignCertificate} className='img-certificate-zoom' alt='responsive web design certificate' />
            </div>

            <div className='close' onClick={zoomCertificate}><GrClose size={30} /></div>
        </div>
    </section>
  )
}

export default Certification