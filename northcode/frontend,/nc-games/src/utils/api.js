import axios from "axios";

const reviewApi = axios.create({
  baseURL: "https://big-bad-board.herokuapp.com/api",
});

export const getCategories = () => {
  return reviewApi.get("/categories").then((res) => {
    //    console.log({ data })
    return res.data.categories;
  });
};

export const getReviews = (sort_by) => {
  return reviewApi.get("/reviews", { params: { sort_by } }).then(({ data }) => {
    return data.reviews;
  });
};

export const getReviewsByCategory = (category) => {
  return reviewApi
    .get(`/reviews`, {
      params: {
        category: `${category}`,
      },
    })
    .then((res) => {
      // console.log(res.data.reviews)
      return res.data.reviews;
    });
};

export const getSingleReview = (review_id) => {
  return reviewApi.get(`/reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};

export const getComments = (review_id) => {
  return reviewApi.get(`/reviews/${review_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const getUser = (username) => {
  return reviewApi
    .get(`users/${username}`)
    .then(({ data }) => {
      return data.user;
    })
    .catch((err) => {
      console.log(err.response);
    });
};

export const postComment = (review_id, reqbody) => {
  return reviewApi
    .post(`/reviews/${review_id}/comments`, reqbody)
    .then((res) => {
      return res.data.comment;
    })
    .catch((error) => {
      console.log(error.response, "this");
    });
};

export const likeCommentById = (comment_id) => {
  return reviewApi
    .patch(`/comments/${comment_id}`, {
      inc_votes: 1,
    })
    .then((res) => {
      return res.data.comment.votes;
    }).catch((err) => {
      console.log(err)
    })
};

export const deleteCommentById = (comment_id) => {
  return reviewApi.delete(`/comments/${comment_id}`).catch((err) => {
    console.log(err.response);
  });
};
