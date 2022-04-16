import React from 'react';
import {Link} from 'react-router-dom'
import '../../styles/nav.css';
import logo from '../../assets/shiny-iris.svg'

export function Navbar() {
  return (
        <header class="navbars">
            <figure className='menu-icon'>
              <img src={logo} width="35px" height="35px" alt="logo" /> 
            </figure>
            <a href="#" class="brand-name h6">
              flick            
            </a>
            <nav>
              <Link to='/login'> 
                <button class="login-btn">
                  Login
                </button>
              </Link>
            </nav>
        </header>
  )
}
