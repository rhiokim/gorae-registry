import registry from '../api/api';

export const REQUEST_DELETE_TAG = 'REQUEST_DELETE_TAG';
export const SUCCESS_DELETE_TAG = 'SUCCESS_DELETE_TAG';
export const FAIL_DELETE_TAG = 'FAIL_DELETE_TAG';

/**
 * Remove Node
 */
const requestDeleteTag = () => ({
  type: REQUEST_DELETE_TAG
});

const successDeleteTag = (data) => ({
  type: SUCCESS_DELETE_TAG,
  repositories: data.repositories,
  receivedAt: Date.now()
});

const failDeleteTag = (error) => ({
  type: FAIL_DELETE_TAG,
  error: error
});

export const deleteTag = (image, tag) => dispatch => {
  dispatch(requestDeleteTag());

  return registry.delete(`${image}/manifests/${tag}`)
    .then(response => {
      const {status, data} = response;

      if (status !== 200) {
        dispatch(failDeleteTag(data));
        return;
      }

      dispatch(successDeleteTag(data));
    })
    .catch(error => {
      const {data} = error.response;
      dispatch(failDeleteTag(data));
    });
};
