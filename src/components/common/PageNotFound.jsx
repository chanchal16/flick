import React from 'react'
import pagenotfound from '../../assets/pagenotfound.svg'

export function PageNotFound() {
  return (
    <div className='page'>
        <img src={pagenotfound} alt='page-not-fouond' className='res-image' />
        <h6 className='h5'>Oops! Page not found</h6>
    </div>
  )
}
