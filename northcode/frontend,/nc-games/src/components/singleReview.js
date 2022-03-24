import { useEffect, useState } from "react";
import {
  deleteCommentById,
  getComments,
  getSingleReview,
  postComment,
} from "../utils/api";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import CommentButton from "./Comments";

const SingleReview = (user) => {
  const { review_id } = useParams();

  const [review, setReview] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [votes, setVotes] = useState("💙");
  const [disable, setDisable] = useState(false);

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
      username: "tickle122",
      body: newComment,
    };
    postComment(review_id, commentDetail)
      .then(() => {
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
          <article key={review.review_id} className="review_body">
            Review: {review.review_body}
          </article>
          <img src={review.review_img_url} alt=""></img>
          <p> Category: {review.category}</p>
        </div>
      </div>
      <article>
        {comments.map((comment) => {
          return (
            <div key={comment.comment_id} className="comments_section">
              <div className="comments_div">
                <p key={comment.comment_id} className="comments">
                  {comment.body} <br></br>
                  <br></br>
                  <Link to={`/users/${comment.author}`}>{comment.author}</Link>
                </p>
              </div>
              <div>
                <CommentButton
                  votes={comment.votes}
                  comment_id={comment.comment_id}
                />

                <button
                  className="like_delete"
                  onClick={() => {
                    const id = comment.comment_id;
                    if (user.value === comment.author) {
                      deleteCommentById(id).then(() => {
                        reloadPage();
                      });
                    } else {
                      alert("Not authorised to delete");
                    }
                  }}
                >
                  ❌
                </button>
              </div>
            </div>
          );
        })}
      </article>

      <form onSubmit={addComment}>
        <textarea
          onChange={handleChange}
          placeholder="Add Comment"
          required="required"
        ></textarea>
        <br></br>
        <button className="button">Add</button>
      </form>
      <br></br>

      <button
        disabled={disable}
        onClick={() => changeVotes()}
        className="like_delete"
      >
        {votes}
      </button>
    </>
  );
};

export default SingleReview;
