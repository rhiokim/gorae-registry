import registry from '../api/api';

export const REQUEST_PUT_TAG = 'REQUEST_PUT_TAG';
export const SUCCESS_PUT_TAG = 'SUCCESS_PUT_TAG';
export const FAIL_PUT_TAG = 'FAIL_PUT_TAG';

/**
 * Remove Node
 */
const requestPutTag = () => ({
  type: REQUEST_PUT_TAG
});

const successPutTag = (data) => ({
  type: SUCCESS_PUT_TAG,
  repositories: data.repositories,
  receivedAt: Date.now()
});

const failPutTag = (error) => ({
  type: FAIL_PUT_TAG,
  error: error
});

export const fetchTag = (image, tag) => dispatch => {
  dispatch(requestPutTag());

  return registry.put(`${image}/manifests/${tag}`)
    .then(response => {
      const {status, data} = response;

      if (status !== 200) {
        dispatch(failPutTag(data));
        return;
      }

      dispatch(successPutTag(data));
    })
    .catch(error => {
      const {data} = error.response;
      dispatch(failPutTag(data));
    });
};
