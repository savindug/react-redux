import { ADD_POSTS, FETCH_POSTS } from './types';
import { getApiURI } from '../env';
const apiURI = getApiURI();

export const fetchPosts = () => (dispatch) => {
  fetch(`${apiURI}/posts?_limit=10`)
    .then((res) => res.json())
    .then((posts) => {
      dispatch({
        type: FETCH_POSTS,
        payload: posts,
      });
    });
};

export const createPost = (post) => (dispatch) => {
  fetch(`${apiURI}/posts`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(post),
  })
    .then((res) => res.json())
    .then((result) => {
      dispatch({
        type: ADD_POSTS,
        payload: result,
      });
    });
};
