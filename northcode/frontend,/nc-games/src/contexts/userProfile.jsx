import { useContext } from "react";
import { UserContext } from "./user";





const UserProfile = () => {
    const { loggedInUser } = useContext(UserContext)
    
    
   

  


    return (
    <div>
        <p>Logged in as:</p>
        <h2>{loggedInUser.username}</h2>
    </div>
    )
}

export default UserProfile;