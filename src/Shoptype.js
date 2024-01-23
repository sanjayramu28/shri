import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faBusinessTime,faStar } from '@fortawesome/free-solid-svg-icons'
const Shoptype = () => {
  return (
    <div className='row container-fluid ic '>
      <a className='col-lg-2 text-center ' href='#'>
        <p className='icons  mt-5'>
        <i>
        <FontAwesomeIcon icon={faHouse} />
      </i>
      <p className='mt-5'>
        For Home
      </p>
      </p>
      </a>
      <a className='col-lg-2 text-center ' href='#'>
        <p className='icons  mt-5'>
        <i>
        <FontAwesomeIcon icon={faBusinessTime} />
      </i>
      <p className='mt-5'>
        For Business
      </p>
      </p>
      </a>
      <a className='col-lg-2 text-center ' href='#'>
        <p className='icons  mt-5'>
        <i>
        <FontAwesomeIcon icon={faStar} />
      </i>
      <p className='mt-5'>
        Smart Home System
      </p>
      </p>
      </a>
    </div>
  )
}

export default Shoptype
