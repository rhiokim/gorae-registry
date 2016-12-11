import registry from '../api/api';

export const REQUEST_FETCH_BLOBS_UPLOADS = 'REQUEST_FETCH_BLOBS_UPLOADS';
export const SUCCESS_FETCH_BLOBS_UPLOADS = 'SUCCESS_FETCH_BLOBS_UPLOADS';
export const FAIL_FETCH_BLOBS_UPLOADS = 'FAIL_FETCH_BLOBS_UPLOADS';

/**
 * Remove Node
 */
const requestFetchBlobsUploads = () => ({
  type: REQUEST_FETCH_BLOBS_UPLOADS
});

const successFetchBlobsUploads = (data) => ({
  type: SUCCESS_FETCH_BLOBS_UPLOADS,
  repositories: data.repositories,
  receivedAt: Date.now()
});

const failFetchBlobsUploads = (error) => ({
  type: FAIL_FETCH_BLOBS_UPLOADS,
  error: error
});

export const fetchBlobsUploads = (image, uuid) => dispatch => {
  dispatch(requestFetchBlobsUploads());

  return registry.get(`${image}/blobs/uploads/${uuid}`)
    .then(response => {
      const {status, data} = response;

      if (status !== 200) {
        dispatch(failFetchBlobsUploads(data));
        return;
      }

      dispatch(successFetchBlobsUploads(data));
    })
    .catch(error => {
      const {data} = error.response;
      dispatch(failFetchBlobsUploads(data));
    });
};
