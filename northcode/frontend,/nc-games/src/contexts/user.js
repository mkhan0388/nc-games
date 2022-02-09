import { createContext } from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { getUsers } from '../utils/api'

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [loggedInUser, setLoggedInUser] = useState('tickle122');
  const { username } = useParams()


  useEffect(() => {
    getUsers(loggedInUser).then((res) => {
        setLoggedInUser(res)
    })
}, [username])


  return (
    <UserContext.Provider
      value={{ loggedInUser, setLoggedInUser }}>
           {props.children}
      </UserContext.Provider>
  );
};
