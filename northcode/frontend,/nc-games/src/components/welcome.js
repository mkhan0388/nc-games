import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { UserContext } from "../contexts/userContext";

// import { getUsers } from "../utils/api";

const Welcome = () => {
 
    const {user, setUser} = useContext(UserContext)
    
    
   
    
    let navigate = useNavigate();
  
    
  
    const handleSubmit = (event) => {
      
      event.preventDefault();
      setUser({username: 'tickle122'});
      navigate(`/users/tickle122}`);
    };
  
    return (
      <>
        <h1 className="welcomeTitle">Welcome to Big Bad Board</h1>
        <form onSubmit={handleSubmit}>
          
            Sign In: <br></br>
            
            <br></br>
          
          <button className="button" type="submit">
            Login
          </button>
        </form>
      </>
    );
  };
  
  export default Welcome;
  