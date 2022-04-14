import React from 'react';
import '../../styles/nav.css';
import logo from '../../assets/shiny-iris.svg'

export function Navbar() {
  return (
    <div>
        <header class="navbars">
            <figure className='menu-icon'>
              <img src={logo} width="35px" height="35px" alt="logo" /> 
            </figure>
            <a href="#" class="brand-name h6">
              flick            
            </a>
            <nav>
              <button class="login-btn">
                Login
              </button>
            </nav>
        </header>

    </div>
  )
}
