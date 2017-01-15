import axios from 'axios';

export function fetchTweets () {

  return function(dispatch) {
    axios.get('http://localhost:3091/tweets')
      .then((response) => {
        dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
      })
  }
}

export function fetchPosts () {
  return function(dispatch) {
    axios.get('http://localhost:3091/posts')
      .then((response) => {
        dispatch({type: "FETCH_POSTS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_POSTS_REJECTED", payload: err})
      })
  }
}


export function fetchComments () {
  return function(dispatch) {
    axios.get('http://localhost:3091/comments')
      .then((response) => {
        dispatch({type: "FETCH_COMMENTS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_COMMENTS_REJECTED", payload: err})
      })
  }
}

export function fetchHeader () {

  return function(dispatch) {
    axios.get('http://localhost:3091/header')
      .then((response) => {
        dispatch({type: "FETCH_HEADER_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_HEADER_REJECTED", payload: err})
      })
  }
}
