import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';
import '../styles/auth.css'

export function Signup() {
    const [signUpForm,setSignUpForm] = useState({name:'',email:'',password:''})
    const { SignUpHandler} = useAuth();
    const navigate= useNavigate()

    const handleSubmit = async(e)=>{
        e.preventDefault()
        await SignUpHandler(signUpForm.name,signUpForm.email, signUpForm.password);
        navigate('/login')  
    }

    const handleSignUp = ()=>{
        setSignUpForm((form)=>({
            ...form,
        }))
    }
  return (
    <div>
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="form-heading h5">Sign Up</h1>
                <div className="input-grp">
                    <label>Name</label>
                    <input type="text" className="input-field" value={signUpForm.name} onChange={(e)=>setSignUpForm((f)=>({...f,name:e.target.value}))} />
                </div>
                <div className="input-grp">
                    <label>Email</label>
                    <input type="email" placeholder="abc@gmail.com" className="input-field"
                    value={signUpForm.email} onChange={(e)=>setSignUpForm((f)=>({...f,email:e.target.value}))} />
                </div>
                <div className="input-grp">
                    <label>Password</label>
                    <input type="password" className="input-field"
                    value={signUpForm.password} onChange={(e)=>setSignUpForm((f)=>({...f,password:e.target.value}))} />
                </div>
                <button type='submit' className="btn primary-btn" onClick={handleSignUp}>Sign Up</button>
                <p>Already have an account ?<Link to='/login' className="primary-text">Sign in</Link></p>
            </form>
        </div>
    </div>
  )
}
