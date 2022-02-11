import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext, UserProvider } from '../contexts/userContext'




const User = () => {
    
   const { setUser } = useContext(UserContext)

   
    
    
   


return (
    <div>
    <h2>My page:</h2>
    <main>
       
               <div>
               <p>
                 Hello  
               </p>
               <p>
                   
               </p>
               </div>
         
    </main>
</div>
)

}


export default User;