import React,{useState} from 'react'
import {Link,useNavigate,useLocation,Navigate} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';
import { usePlaylist } from '../contexts/PlaylistContext';
import { clearHistory } from '../services/history-services';
import '../styles/auth.css'

export function Login() {
  const navigate = useNavigate()
  let location = useLocation();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const {LoginHandler,token,user} = useAuth();
  const {playListState,playListDispatch} = usePlaylist()
  let from = location.state?.from?.pathname || "/";
 
  const handleSubmit = async(e)=>{
    e.preventDefault()
    if(playListState.history.length >0){
      clearHistory(token,playListDispatch)
    }   
    await LoginHandler(loginForm.email, loginForm.password); 
    
  }

  const HandleLogin=() =>{
    setLoginForm((form)=>({
      ...form,
      email: "testing@test.com",
      password: "test123",
    }));
  }
  if (user) {
    return <Navigate to={from || "/"} replace />;
  }
  
  return (
    <div>
        <div className="form-container">
            <form className="form" onSubmit={ handleSubmit}>
                <h1 className="form-heading h5">Log In</h1>
                <div className="input-grp">
                    <label>Email</label>
                    <input type="email" placeholder="abc@gmail.com" className="input-field" value={loginForm.email}
                    onChange={(e)=>setLoginForm((form)=>({...form,email:e.target.value}))} />
                </div>
                <div className="input-grp">
                    <label>Password</label>
                    <input type="password" className="input-field" value={loginForm.password}
                    onChange={(e)=>setLoginForm((form)=>({...form,password:e.target.value}))} />
                </div>
                <button type='submit' className="btn primary-btn">Login</button>
                <button className="btn accent-btn" onClick={()=>HandleLogin()}>Guest Login</button>
                <p>Don't have an account ?
                  <span className="primary-text" onClick={() => navigate("/signup", { state: { from } })} style={{cursor:'pointer'}}>
                     SignUp</span>
                </p>
            </form>
        </div>
    </div>
  )
}
