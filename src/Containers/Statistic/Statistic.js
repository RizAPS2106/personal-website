import React from 'react'
import './Statistic.css'
import Programming from '../../Components/Programming/Programming'
import Software from '../../Components/Software/Software'

function Statistic() {
  return (
    <section className='statistic' id='statistic'>
        <div className='container'>
            <Programming />
            <Software />
        </div>
    </section>
  )
}

export default Statistic