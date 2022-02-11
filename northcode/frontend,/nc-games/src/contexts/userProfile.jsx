import { useContext } from "react";
import { UserContext } from "./userContext";





const UserProfile = () => {

    const { user } = useContext(UserContext)
    // console.log({loggedInUser})
    
    
   

  


    return (
    <div>
        <p>Logged in as:</p>
        <h2>{user.username}</h2>
    </div>
    )
}

export default UserProfile;