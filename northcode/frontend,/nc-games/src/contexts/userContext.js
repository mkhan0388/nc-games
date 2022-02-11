import { createContext } from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { getUsers } from '../utils/api'

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  

   const [user, setUser] = useState('')
  


//   useEffect(() => {
//     getUsers(user).then((res) => {
//         console.log(res)
//     })
// }, [])


  return (
    <UserContext.Provider
      value={{ user, setUser }}>
           {children}
      </UserContext.Provider>
  );
};
