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

export const getReviews = (sort_by) => {
    return reviewApi.get('/reviews', {params: {sort_by}}).then(({ data }) => {
        return data.reviews
    })
}

export const getReviewsByCategory = (category) => {
    return reviewApi
      .get(`/reviews`, {params: {
        category: `${category}`,

      }} )
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
      return res.data.comments
    })
  }

  export const getUsers = (username) => {
      return reviewApi.get(`/users/${username}`).then((res) => {
        
          return res.data.user
      })
  }

  // export const getReviewsNComments = (review_id) => {
  //   let endpoints = [`https://big-bad-board.herokuapp.com/api/reviews/${review_id}`, 
  //   `https://big-bad-board.herokuapp.com/apireviews/${review_id}/comments`]
    
  //   return reviewApi.get(`/reviews/${review_id}/comments`).then((res) => {
  //     return res.data.comments;
  //   });
  // }

  export const postComment = (review_id, reqbody) => {
    return reviewApi.post(`/reviews/${review_id}/comments`, reqbody ).then(({ data }) => {
      return data.comment
    })
  }

  // export const patchVotes = (review_id, voteValue) => {
  //   const voteUpdate = { inc_votes: voteValue };
  //   return reviewApi.patch(`/reviews/${review_id}`, voteUpdate).then(({ data }) => {
  //     return data.votes
  //   })
  // }