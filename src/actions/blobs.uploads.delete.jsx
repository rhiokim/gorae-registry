import registry from '../api/api';

export const REQUEST_DELETE_BLOBS_UPLOADS = 'REQUEST_DELETE_BLOBS_UPLOADS';
export const SUCCESS_DELETE_BLOBS_UPLOADS = 'SUCCESS_DELETE_BLOBS_UPLOADS';
export const FAIL_DELETE_BLOBS_UPLOADS = 'FAIL_DELETE_BLOBS_UPLOADS';

/**
 * Remove Node
 */
const requestDeleteBlobsUploads = () => ({
  type: REQUEST_DELETE_BLOBS_UPLOADS
});

const successDeleteBlobsUploads = (data) => ({
  type: SUCCESS_DELETE_BLOBS_UPLOADS,
  repositories: data.repositories,
  receivedAt: Date.now()
});

const failDeleteBlobsUploads = (error) => ({
  type: FAIL_DELETE_BLOBS_UPLOADS,
  error: error
});

export const deleteBlobsUploads = (image, uuid) => dispatch => {
  dispatch(requestDeleteBlobsUploads());

  return registry.delete(`${image}/blobs/uploads/${uuid}`)
    .then(response => {
      const {status, data} = response;

      if (status !== 200) {
        dispatch(failDeleteBlobsUploads(data));
        return;
      }

      dispatch(successDeleteBlobsUploads(data));
    })
    .catch(error => {
      const {data} = error.response;
      dispatch(failDeleteBlobsUploads(data));
    });
};
