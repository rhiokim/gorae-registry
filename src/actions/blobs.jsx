import registry from '../api/api';

export const REQUEST_FETCH_BLOBS = 'REQUEST_FETCH_BLOBS';
export const SUCCESS_FETCH_BLOBS = 'SUCCESS_FETCH_BLOBS';
export const FAIL_FETCH_BLOBS = 'FAIL_FETCH_BLOBS';

/**
 * Remove Node
 */
const requestFetchBlobs = () => ({
  type: REQUEST_FETCH_BLOBS
});

const successFetchBlobs = (data) => ({
  type: SUCCESS_FETCH_BLOBS,
  repositories: data.repositories,
  receivedAt: Date.now()
});

const failFetchBlobs = (error) => ({
  type: FAIL_FETCH_BLOBS,
  error: error
});

export const fetchBlobs = (image, digest) => dispatch => {
  dispatch(requestFetchBlobs());

  return registry.get(`${image}/blobs/${digest}`)
    .then(response => {
      const {status, data} = response;

      if (status !== 200) {
        dispatch(failFetchBlobs(data));
        return;
      }

      dispatch(successFetchBlobs(data));
    })
    .catch(error => {
      const {data} = error.response;
      dispatch(failFetchBlobs(data));
    });
};
