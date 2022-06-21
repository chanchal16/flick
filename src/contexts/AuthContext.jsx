import React,{useState,createContext,useContext} from 'react'
import {LoginUser,SignUpUser} from '../services/auth';
import { toast } from "react-toastify"

const AuthContext = createContext();

 function AuthContextProvider({children}) {
  //  get the token from localstorage
  const loginToken = JSON.parse(localStorage.getItem("token"));
  const localUser = JSON.parse(localStorage.getItem('flickusers'));
  // usestates
  const [token, setToken] = useState(loginToken?.token);
  const [user, setUser] = useState(); 

  const LoginHandler = async (email, password) => {
    if (email && password !== '' ) {
      try {
        const {
          data: { foundUser, encodedToken },
          status,
        } = await LoginUser(email, password);
        if (status === 200) {
          localStorage.setItem(
            "token",
            JSON.stringify({ token: encodedToken })
          );
          setToken(encodedToken);
          localStorage.setItem('flickusers',JSON.stringify(foundUser))
          setUser(foundUser);
          toast.success('Logged in successfully');
        }
      } catch (error) {
        console.error("Error in while logging in", error);
        toast.error("Can't log in, please check your email")
      }
    }
  };

  const SignUpHandler = async (name,email,password)=>{
    try{
      const {
        data: { createdUser, encodedToken }
      } = await SignUpUser(name,email, password);
        localStorage.setItem(
          "token",
          JSON.stringify({ token: encodedToken })
        );
        setToken(encodedToken);
        localStorage.setItem('flickusers',JSON.stringify(createdUser))
        setUser(createdUser);
        toast.success('Signed Up successfully');
    }
    catch (err){
      console.error('error while creating user',err);
      toast.error("Can't sign up, please try later")
    }
  }
  const ProviderItem = {token,user,setUser,SignUpHandler,LoginHandler}
  return (
    <div>
        <AuthContext.Provider value={ProviderItem}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}
const useAuth = ()=>useContext(AuthContext)
export {AuthContextProvider,useAuth}