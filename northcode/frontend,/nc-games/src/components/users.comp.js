import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext, UserProvider } from '../contexts/userContext'




const User = (props) => {
  
    
   const { setUser } = useContext(UserContext)

   const { username } =  useParams()

   console.log(username)
  
   
    
    
   


return (
    <div>
    <h2>My page:</h2>
    <main>
       
               <div>
               <p>
                 Hello  {username}
               </p>
               <p>
                   
               </p>
               </div>
         
    </main>
</div>
)

}


export default User;