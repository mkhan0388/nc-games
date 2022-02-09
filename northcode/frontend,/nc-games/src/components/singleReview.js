import React, { useEffect, useState } from "react";
import { getSingleReview } from "../utils/api";
import { useParams } from "react-router-dom";

const SingleReview = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});

  useEffect(() => {
    getSingleReview(review_id).then((res) => {
      setReview(res);
    });
  }, [review_id]);

  return (
    <>
      <div className="container">
        <h2>{review.title}</h2>

        <div>
            <p> User: {review.owner}</p>
            <p> Review: {review.review_body}</p>
            <img  src={review.review_img_url} alt=""></img>
            <p> Category: {review.category}</p>
            <p>Number of Votes: {review.votes}</p>

        </div>
      </div>
      <input placeholder="Add Comment"></input>
      <button className="button">Add Comment</button> <br></br>
      <button className="button">Like</button>
      <button className="button">Bad board</button>
    </>
  );
};

export default SingleReview;
