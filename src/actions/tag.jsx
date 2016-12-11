import registry from '../api/api';

export const REQUEST_FETCH_TAG = 'REQUEST_FETCH_TAG';
export const SUCCESS_FETCH_TAG = 'SUCCESS_FETCH_TAG';
export const FAIL_FETCH_TAG = 'FAIL_FETCH_TAG';

/**
 * Remove Node
 */
const requestFetchTag = () => ({
  type: REQUEST_FETCH_TAG
});

const successFetchTag = (data) => ({
  type: SUCCESS_FETCH_TAG,
  repositories: data.repositories,
  receivedAt: Date.now()
});

const failFetchTag = (error) => ({
  type: FAIL_FETCH_TAG,
  error: error
});

export const fetchTag = (image, tag) => dispatch => {
  dispatch(requestFetchTag());

  return registry.get(`${image}/manifests/${tag}`)
    .then(response => {
      const {status, data} = response;

      if (status !== 200) {
        dispatch(failFetchTag(data));
        return;
      }

      dispatch(successFetchTag(data));
    })
    .catch(error => {
      const {data} = error.response;
      dispatch(failFetchTag(data));
    });
};
