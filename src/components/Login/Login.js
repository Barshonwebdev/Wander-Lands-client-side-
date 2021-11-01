import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url= location.state?.from;
    console.log(location.state?.from);

    const handleGoogleLogin = () =>{
      signInUsingGoogle()
      .then(result => {
        console.log(result.user);
        if (redirect_url==undefined){
          history.push("/home")
        }
        else{

        history.push(redirect_url); }
    })
      
    
    }
    return (
        <div className="login-box">
            <h2>Please Login</h2>
            <br/>
            <button onClick={handleGoogleLogin} className= "btn-success">Google Sign In</button>
            </div>
            
            
    );
};

export default Login;