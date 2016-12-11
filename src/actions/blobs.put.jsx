import registry from '../api/api';

export const REQUEST_PUT_BLOBS = 'REQUEST_PUT_BLOBS';
export const SUCCESS_PUT_BLOBS = 'SUCCESS_PUT_BLOBS';
export const FAIL_PUT_BLOBS = 'FAIL_PUT_BLOBS';

/**
 * Remove Node
 */
const requestPutBlobs = () => ({
  type: REQUEST_PUT_BLOBS
});

const successPutBlobs = (data) => ({
  type: SUCCESS_PUT_BLOBS,
  repositories: data.repositories,
  receivedAt: Date.now()
});

const failPutBlobs = (error) => ({
  type: FAIL_PUT_BLOBS,
  error: error
});

export const PutTag = (image) => dispatch => {
  dispatch(requestPutBlobs());

  return registry.post(`${image}/blobs/uploads`)
    .then(response => {
      const {status, data} = response;

      if (status !== 200) {
        dispatch(failPutBlobs(data));
        return;
      }

      dispatch(successPutBlobs(data));
    })
    .catch(error => {
      const {data} = error.response;
      dispatch(failPutBlobs(data));
    });
};
