import axios from 'axios';
import fetch from 'cross-fetch'

const GET_APP_SETTINGS_SUCCESS = "LOGGED_SUCCESSFULLY";

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
const initialState = {};
export function loginSuccess(data) {
  return {
    payload: data,
    type: GET_APP_SETTINGS_SUCCESS,
  }
};


const reducer = (state = initialState, action) => {
  const { data } = action;
  if (action.type === GET_APP_SETTINGS_SUCCESS) {
    const appSettings = { data };
    return appSettings;
  }
  return state;
};


const fetchArticleDetails = (dispatch) => {
  console.log("dispatch_ddd", dispatch);
  fetch('http://3.81.119.96:5000/get_details?email=amit_test@gmail.com', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
  .then(response1 => {
        dispatch(loginSuccess(response1));
    });
}

function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

function receivePosts(json) {
  return {
    type: RECEIVE_POSTS,
    posts: json.data,
  }
}

function fetchPosts() {
  return dispatch => {
    dispatch(requestPosts())
    return fetch('http://3.81.119.96:5000/get_details?email=amit_test@gmail.com')
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json)))
  }
}

export { fetchArticleDetails, reducer, fetchPosts, GET_APP_SETTINGS_SUCCESS };
