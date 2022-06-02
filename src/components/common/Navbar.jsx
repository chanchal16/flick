import React,{useMemo} from 'react';
import {Link,useNavigate} from 'react-router-dom'
import '../../styles/nav.css';
import logo from '../../assets/shiny-iris.svg'
import { useVideo,useAuth,usePlaylist } from '../../contexts/MainProvider';
import {MdSearch,MdLogout,MdLogin} from 'react-icons/md'
import { debounce } from '../../Utils/debounce';
import { toast } from "react-toastify"

export function Navbar() {
  const{user,setUser} = useAuth()
  const{videoState,videoDispatch} = useVideo()
  const{playListDispatch} = usePlaylist();
  const navigate = useNavigate()

  const handleSearch = (e)=>{
    e.preventDefault()
    navigate('/videos')   
  }
  // input change handler
  const onChangeHandler = (e)=>{   
    videoDispatch({type:'SEARCH',payload:e.target.value.toLowerCase()})
  }
  // debounce onchange handler
  // memoizes the debounced handler, but also calls debounce() only during initial rendering of the component 
  const debouncedChangeHandler = useMemo(
    () => debounce(onChangeHandler,1000),
  [videoState.searchQuery])

  // logout
  const handleLogout = ()=>{
    setUser(null)
    localStorage.removeItem("token");
    playListDispatch({type:'CLEAR'})
    toast.success('Logged out successfully!')
  }
  return (
        <header className="navbars">
            <figure className='menu-icon'>
              <img src={logo} width="35px" height="35px" alt="logo" /> 
            </figure>
            <a href="/" className="brand-name h6">
              flick            
            </a>
            <nav>
              <form onSubmit={handleSearch} className='search-form'>
                <input type='search' className='search' placeholder='search'
                 onChange={debouncedChangeHandler} />
                <span className='search-icon gray'><MdSearch size='1rem'/> </span>
              </form>
              {
                user ?
                (
                  <span className="auth-btn" onClick={handleLogout}>
                    <MdLogout size={'1.5rem'}/>
                  </span>
                ):(
                  <Link to='/login'> 
                    <span className="auth-btn">
                      <MdLogin size={'1.5rem'}/>
                    </span>
                  </Link>
                )
              }             
            </nav>
        </header>
  )
}
