import { useEffect, useState } from 'react'
import { getReviews } from '../utils/api';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "../contexts/user";
const Nav = () => {
    const [reviews, setReviews] = useState([]);

    const { loggedInUser } = useContext(UserContext)
   
    useEffect(() => {
        getReviews().then((apiReviews) => {
            setReviews(apiReviews)
        })
    }, [])
 
    console.log(loggedInUser, '<<<<')

    return (
    // <nav className='nav'>
    //     {reviews.map((review) => {
    //         return (
    //             <Link to={`/reviews?category=${review.category}`} >| {review.category.toUpperCase()} |</Link>
    //         )
    //     })}

    <nav className='nav'>
      <Link to="/">Home | </Link>
      <Link to="/reviews">Reviews | </Link>
      <Link to="/categories">Categories | </Link>
      <Link to={`/users/${loggedInUser}`}>User | </Link>
    </nav>
    



    )
}


export default Nav;