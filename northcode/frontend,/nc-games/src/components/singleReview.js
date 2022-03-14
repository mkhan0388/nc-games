import React, { useEffect, useState, useContext } from "react";
import {
  deleteCommentById,
  getComments,
  getSingleReview,
  likeCommentById,
  postComment,
} from "../utils/api";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../contexts/userContext";

const SingleReview = () => {
  const { review_id } = useParams();
  const { user, setUser } = useContext(UserContext);
  const [review, setReview] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [votes, setVotes] = useState(0);
  const [disable, setDisable] = useState(false);
  const [commentVote, setCommentVote] = useState(false);

  useEffect(() => {
    getSingleReview(review_id)
      .then((res) => {
        setReview(res);
      })
      .then(
        getComments(review_id).then((res) => {
          setComments(res);
        })
      );
  }, [review_id]);

  const reloadPage = () => {
    window.location.reload(false);
  };

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  const addComment = (event) => {
    event.preventDefault();
    const commentDetail = {
      username: user.username,
      body: newComment,
    };
    postComment(review_id, commentDetail)
      .then(() => {
        // reloadPage()
        setComments((current) => {
          return [commentDetail, ...current];
        });
      })
      .then(() => {
        setNewComment("");
      });
  };

  const changeVotes = () => {
    setVotes((currCount) => currCount + 1);

    axios
      .patch(`https://big-bad-board.herokuapp.com/api/reviews/${review_id}`, {
        inc_votes: 1,
      })
      .then((res) => {
        setVotes(res.data.review.votes);
      });
    setDisable(true);
  };

  return (
    <>
      <div className="container">
        <h2 className="review_title">{review.title}</h2>

        <div>
          <p> User: {review.owner}</p>
          <article className="review_body">
            Review: {review.review_body}
          </article>
          <img src={review.review_img_url} alt=""></img>
          <p> Category: {review.category}</p>
        </div>
      </div>
      <article>
        {comments.map((comment) => {
          return (
            <div className="comments_section">
              <div className="comments_div">
                <p key={comment.comment_id} className="comments">
                  {comment.body} <br></br>
                  <br></br>
                  
                    {" "}
                    <Link to={`/users/${comment.author}`}>
                      {comment.author}
                    </Link>
                  
               </p>
              </div>
              <div>
                <button
                  className="like_delete"
                  onClick={() => {setCommentVote(true);
                    const id = comment.comment_id;
                    setVotes((currCount) => currCount + 1);
                    likeCommentById(id).then((res) => {
                      console.log(res);
                      
                      setVotes(res);
                    });
                  }}
                disabled={commentVote}>
                  {'💙'}
                </button>

                <button
                  className="like_delete"
                  onClick={() => {
                    const id = comment.comment_id;
                    deleteCommentById(id).then(() => {
                      reloadPage();
                    });
                  }}
                >
                  ❌
                </button>
              </div>
            </div>
          );
        })}
      </article>
     
      <input onChange={handleChange} placeholder="Add Comment"></input>
      <br></br>
      <button onClick={addComment} className="button">
        Add
      </button>
      <br></br>

      <button className='like_delete'
        disabled={disable}
        onClick={() => changeVotes()}
        className='like_delete'
      >
        {"💙"}
      </button>
    </>
  );
};

export default SingleReview;
