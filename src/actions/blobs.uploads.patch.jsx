import registry from '../api/api';

export const REQUEST_PATCH_BLOBS_UPLOADS = 'REQUEST_PATCH_BLOBS_UPLOADS';
export const SUCCESS_PATCH_BLOBS_UPLOADS = 'SUCCESS_PATCH_BLOBS_UPLOADS';
export const FAIL_PATCH_BLOBS_UPLOADS = 'FAIL_PATCH_BLOBS_UPLOADS';

/**
 * Remove Node
 */
const requestPatchBlobsUploads = () => ({
  type: REQUEST_PATCH_BLOBS_UPLOADS
});

const successPatchBlobsUploads = (data) => ({
  type: SUCCESS_PATCH_BLOBS_UPLOADS,
  repositories: data.repositories,
  receivedAt: Date.now()
});

const failPatchBlobsUploads = (error) => ({
  type: FAIL_PATCH_BLOBS_UPLOADS,
  error: error
});

export const patchBlobsUploads = (image, uuid) => dispatch => {
  dispatch(requestPatchBlobsUploads());

  return registry.patch(`${image}/blobs/uploads/${uuid}`)
    .then(response => {
      const {status, data} = response;

      if (status !== 200) {
        dispatch(failPatchBlobsUploads(data));
        return;
      }

      dispatch(successPatchBlobsUploads(data));
    })
    .catch(error => {
      const {data} = error.response;
      dispatch(failPatchBlobsUploads(data));
    });
};
