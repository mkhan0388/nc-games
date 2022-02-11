import React, { useEffect, useState } from "react";
import { getComments, getSingleReview, patchVotes, postComment } from "../utils/api";
import { useParams, Link } from "react-router-dom";
import axios from "axios";


const SingleReview = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [comments, setComments] = useState([])
  const [data, setData] = useState({username: '', body: ''})
  const [votes, setVotes] = useState(review.votes)
  
  useEffect(() => {
    getSingleReview(review_id).then((res) => {
      setReview(res);
    }).then((getComments(review_id).then((res) => {
      setComments(res)
    })))
    
  }, [review_id]);

  const handleChange = (event) => {
    setData(event.target.value)
axios.post(`https://big-bad-board.herokuapp.com/api/reviews/${review_id}/comments`, {username: event.target.value, body:event.target.value }).then((res) => {
        console.log(res)
      })
    
  }
  
  const handleSubmit = (event) => {
      event.preventDefault();
      
      };

  const changeVotes = () => {
    setVotes((currCount) => currCount + 1)
    axios.patch(`https://big-bad-board.herokuapp.com/api/reviews/${review_id}`, {inc_votes: 1}).then((res) => {
      setVotes(res)
    })
    
  }     

 
  return (
    <>
      <div className="container">
        <h2 className="review_title">{review.title}</h2>

        <div>
            <p> User: {review.owner}</p>
            <article className="review_body"> Review: {review.review_body}</article>
            <img  src={review.review_img_url} alt=""></img>
            <p> Category: {review.category}</p>
            <p >Number of Votes:  {review.votes}</p>
            

        </div>
      </div>     
      <article>
        
        {comments.map((comment) => {
          return (
            <p key={comment.comment_id} className="comments">{comment.body} <Link to={`/users/${comment.author}`}>{comment.author}</Link></p>
          )
        })}

      </article>
      <form onSubmit={handleSubmit}>
 
      <input onChange={handleChange} placeholder="enter username"></input>
      <input onChange={handleChange} placeholder="Add Comment"></input> <br></br>
      <button className="button">Add</button> <br></br>
      <button onClick={changeVotes} className="button">Like</button>
      <button className="button">Bad board</button>
      </form>
    </>
  );
};

export default SingleReview;
