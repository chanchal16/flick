import React,{useState,createContext,useContext} from 'react'
import {LoginUser,SignUpUser} from '../services/auth';

const AuthContext = createContext();

 function AuthContextProvider({children}) {
  //  get the token from localstorage
  const loginToken = JSON.parse(localStorage.getItem("token"));
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
          localStorage.setItem('users',JSON.stringify(foundUser))
          setUser(foundUser);
        }
      } catch (error) {
        console.error("Error in while logging in", error);
      }
    }
  };

  const SignUpHandler = async(name,email,password)=>{
    if(name && email && password === ''){
      try{
        const {
          data: { createdUser, encodedToken },
          status,
        } = await SignUpUser(name,email, password);
        if (status === 201) {
          localStorage.setItem(
            "token",
            JSON.stringify({ token: encodedToken })
          );
          setToken(encodedToken);
          localStorage.setItem('users',JSON.stringify(createdUser))
          setUser(createdUser);
        }
      }
      catch (err){
        console.error('error while creating user',err);
      }
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