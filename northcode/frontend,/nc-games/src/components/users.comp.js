import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getUsers } from '../utils/api'


const User = () => {
    const [users, setUsers] = useState([])
    const { username } = useParams()

    useEffect(() => {
        getUsers(username).then((res) => {
            setUsers(res)
        })
    }, [username])


return (
    <div>
    <h2>My page:</h2>
    <main>
       
               <div>
               <p>
                   {users.username}
               </p>
               <p>
                   {users.name}
               </p>
               </div>
         
    </main>
</div>
)

}


export default User;