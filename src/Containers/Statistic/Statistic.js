import React from 'react'
import './Statistic.css'
import Programming from '../../Components/Programming/Programming'
import Tools from '../../Components/Sofware/Software'

function Statistic() {
  return (
    <section className='statistic' id='statistic'>
        <div className='container'>
            <Programming />
            <Tools />
        </div>
    </section>
  )
}

export default Statistic