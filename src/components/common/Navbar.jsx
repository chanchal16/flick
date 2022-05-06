import React from 'react';
import {Link,useNavigate} from 'react-router-dom'
import '../../styles/nav.css';
import logo from '../../assets/shiny-iris.svg'
import { useVideo } from '../../contexts/VideoContext';
import {MdSearch} from 'react-icons/md'

export function Navbar() {
  const{videoState,videoDispatch} = useVideo()
  const navigate = useNavigate()

  const handleSearch = (e)=>{
    e.preventDefault()
    navigate('/videos')   
  }
  return (
        <header className="navbars">
            <figure className='menu-icon'>
              <img src={logo} width="35px" height="35px" alt="logo" /> 
            </figure>
            <a href="#" className="brand-name h6">
              flick            
            </a>
            <nav>
              <form onSubmit={handleSearch} className='search-form'>
                <input type='search' className='search' placeholder='search'
                value={videoState.searchQuery} onChange={(e)=>videoDispatch({type:'SEARCH',payload:e.target.value.toLowerCase()})} />
                <span className='search-icon gray'><MdSearch size='1rem'/> </span>
              </form>
              <Link to='/login'> 
                <button className="login-btn">
                  Login
                </button>
              </Link>
            </nav>
        </header>
  )
}
