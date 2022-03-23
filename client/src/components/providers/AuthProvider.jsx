import { createContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const authContext = createContext();

export default function AuthProvider(props) {
// Get the value from session sotrage. 
const sessionStorageValue = JSON.parse(sessionStorage.getItem("loggedIn"));

  let navigate = useNavigate();
  
  const [auth, setAuth] = useState(sessionStorageValue);
  const [user, setUser] = useState(null);

  // Perform login process for the user & save authID, etc
  const login = function(email, password) {
   console.log("login");
    
    const id = "1234-1234-1234";  // Some random userId
    
    axios.post('http://localhost:8080/login', {email, password}).then(() => {
      setAuth(true);
      sessionStorage.setItem("loggedIn", "true");
      navigate('/', { replace: true });   
      setUser({ email, id, name: "Test User" });
    })
    .catch((error) => {
      console.log(error)  
      navigate('/', { replace: true });
    })
    
    
  };

  const logout = function() {
    console.log("logout");
    setAuth(false);
    sessionStorage.setItem("loggedIn", "false");

    setUser(null);
  };

  // authContext will expose these items
  const userData = { auth, user, login, logout };

  // We can use this component to wrap any content we want to share this context
  return (
    <authContext.Provider value={userData}>
      {props.children}
    </authContext.Provider>
  );
};