import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getUsers } from "../utils/api";

const Welcome = () => {
    const [input, setInput] = useState("");
    const [user, setUser] = useState("");
    const { username } = useParams()
    
    useEffect(() => {
      getUsers(username).then((res) => {
        setUser(res)
      })
    }, [username])
    
    let navigate = useNavigate();
  
    const handleChange = (event) => {
      setUser(event.target.value);
    };
  
    const handleSubmit = (event) => {
      
      event.preventDefault();
      setUser(input);
      setInput("");
      navigate(`/user/${username}`);
    };
  
    return (
      <>
        <h1 className="welcomeTitle">Welcome to Big Bad Board</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="welcomeLabel">
            Username: <br></br>
            <input
              id="welcomeLabel"
              value={username}
              placeholder="Type username here..."
              onChange={handleChange}
            ></input>
            <br></br>
          </label>
          <button className="button" type="submit">
            Login
          </button>
        </form>
      </>
    );
  };
  
  export default Welcome;
  