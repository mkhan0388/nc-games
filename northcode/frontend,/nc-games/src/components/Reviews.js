import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReviews } from "../utils/api";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  // const { category } = useParams();
  // const [searchParams, setSearchParams] = useSearchParams();

  // const byCategory = searchParams.get("category");

  useEffect(() => {
    getReviews().then((res) => {
      setReviews(res);
    });
  }, []);

  // useEffect(() => {
  //   getReviews(category).then((apiReviews) => {
  //     setReviews(apiReviews);
  //   });
  // }, [category]);

  return (
    <main className="reviews">
      <h2>All Reviews</h2>
      <div>
        <h5> Sort By </h5>
        <button>Votes</button>
        <button>Comment Count</button>
      </div>
      <ul>
        {reviews.map((review) => {
          return (
            <Link key={review.review_id} to={`/reviews/${review.review_id}`}>
              <li className="li-contain">
                <div className="li-card">
                  <h4>
                    Title:<p>{review.title}</p>
                  </h4>

                  <h4>Category:</h4>
                  <Link to={`/reviews?category=${review.category}`}>
                    {" "}
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
              </li>
            </Link>
          );
        })}
      </ul>
    </main>
  );
};

export default Reviews;
