import registry from '../api/api';

export const REQUEST_FETCH_TAGS = 'REQUEST_FETCH_TAGS';
export const SUCCESS_FETCH_TAGS = 'SUCCESS_FETCH_TAGS';
export const FAIL_FETCH_TAGS = 'FAIL_FETCH_TAGS';

/**
 * Remove Node
 */
const requestFetchTags = () => ({
  type: REQUEST_FETCH_TAGS
});

const successFetchTags = (data) => ({
  type: SUCCESS_FETCH_TAGS,
  repositories: data.repositories,
  receivedAt: Date.now()
});

const failFetchTags = (error) => ({
  type: FAIL_FETCH_TAGS,
  error: error
});

export const fetchTags = (image) => dispatch => {
  dispatch(requestFetchTags());

  return registry.get(`${image}/tags/list`)
    .then(response => {
      const {status, data} = response;

      if (status !== 200) {
        dispatch(failFetchTags(data));
        return;
      }

      dispatch(successFetchTags(data));
    })
    .catch(error => {
      const {data} = error.response;
      dispatch(failFetchTags(data));
    });
};
