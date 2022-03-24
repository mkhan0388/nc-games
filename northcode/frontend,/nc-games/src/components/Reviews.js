import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getReviews, getReviewsByCategory } from "../utils/api";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const [sortBy, setSortby] = useState("created_at");

  const [searchParams, setSearchParams] = useSearchParams();

  const byCategory = searchParams.get("category");

  useEffect(() => {
    if (!byCategory) {
      getReviews(sortBy).then((res) => {
        setReviews(res);
        setSearchParams("");
      });
    } else {
      getReviewsByCategory(byCategory).then((res) => {
        setReviews(res);
        setSearchParams("");
      });
    }
  }, [byCategory, setSearchParams, sortBy]);

  const sortByVotes = () => {
    setSortby("votes");
  };

  const sortByCommentCount = () => {
    setSortby("comment_count");
  };

  return (
    <main className="reviews">
      <h2>All Reviews</h2>
      <div>
        <h5> Sort By </h5>
        <button onClick={() => sortByVotes()}>Votes</button>
        <button onClick={() => sortByCommentCount()}>Comment Count</button>
      </div>
      <div className="the__ul">
        <div className="container">
          <ul>
            {reviews.map((review) => {
              return (
                <li key={review.review_id} className="li-contain">
                  <div className="li-card">
                    <h4>Title:</h4>
                    <Link to={`/reviews/${review.review_id}`}>
                      <p>{review.title}</p>
                    </Link>

                    <h4>Category:</h4>
                    <Link to={`/reviews?category=${review.category}`}>
                      <p>{`${review.category
                        .charAt(0)
                        .toUpperCase()}${review.category.substring(1)} `}</p>
                    </Link>
                  </div>
                  <div className="li-pic">
                    <img
                      className="previewImg"
                      src={review.review_img_url}
                      alt=""
                    ></img>
                  </div>
                  <p>Number of Votes {review.votes}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Reviews;
