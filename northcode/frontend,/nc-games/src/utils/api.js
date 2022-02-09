import axios from 'axios';

const reviewApi = axios.create({
    baseURL: 'https://big-bad-board.herokuapp.com/api'
})

export const getCategories = () => {
    return reviewApi.get('/categories').then((res) => {
    //    console.log({ data })
    return res.data.categories
    })
}

export const getReviews = () => {
    return reviewApi.get('/reviews').then(({ data }) => {
        return data.reviews
    })
}

export const getReviewsByCategory = (category) => {
    return reviewApi
      .get(`/reviews?category=${category}`, {params: {
        category: `${category}`
      }} )
      .then((res) => {
        console.log(res.data.reviews)
        return res.data.reviews;
        
      });
  };

  export const getSingleReview = (review_id) => {
    return reviewApi.get(`/reviews/${review_id}`).then((res) => {
      return res.data.review;
    });
  };

  export const getUsers = (username) => {
      return reviewApi.get(`/users/${username}`).then((res) => {
          return res.data.user
      })
  }