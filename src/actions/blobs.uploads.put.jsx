import registry from '../api/api';

export const REQUEST_PUT_BLOBS_UPLOADS = 'REQUEST_PUT_BLOBS_UPLOADS';
export const SUCCESS_PUT_BLOBS_UPLOADS = 'SUCCESS_PUT_BLOBS_UPLOADS';
export const FAIL_PUT_BLOBS_UPLOADS = 'FAIL_PUT_BLOBS_UPLOADS';

/**
 * Remove Node
 */
const requestPutBlobsUploads = () => ({
  type: REQUEST_PUT_BLOBS_UPLOADS
});

const successPutBlobsUploads = (data) => ({
  type: SUCCESS_PUT_BLOBS_UPLOADS,
  repositories: data.repositories,
  receivedAt: Date.now()
});

const failPutBlobsUploads = (error) => ({
  type: FAIL_PUT_BLOBS_UPLOADS,
  error: error
});

export const putBlobsUploads = (image, uuid) => dispatch => {
  dispatch(requestPutBlobsUploads());

  return registry.put(`${image}/blobs/uploads/${uuid}`)
    .then(response => {
      const {status, data} = response;

      if (status !== 200) {
        dispatch(failPutBlobsUploads(data));
        return;
      }

      dispatch(successPutBlobsUploads(data));
    })
    .catch(error => {
      const {data} = error.response;
      dispatch(failPutBlobsUploads(data));
    });
};
