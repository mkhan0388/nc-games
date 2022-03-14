import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { UserContext } from "../contexts/userContext";



const Welcome = () => {
  const [username, setUsername] = useState("");

  const navigate = useNavigate();
  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername('');
		navigate(`/users/${username}`);
  };

  return (
    <>
      <h1 className="welcomeTitle">Welcome to Big Bad Board</h1>

      <h3>Sign In</h3>

      <input type="text" placeholder="Enter Username" onChange={handleChange}></input>

      <button onClick={handleSubmit} className="button" type="submit">
        Login
      </button>
    </>
  );
};

export default Welcome;
