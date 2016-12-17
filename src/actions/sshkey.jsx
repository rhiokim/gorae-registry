import {api} from '../api/api';

export const REQUEST_FETCH_RSA_PUB = 'REQUEST_FETCH_RSA_PUB';
export const SUCCESS_FETCH_RSA_PUB = 'SUCCESS_FETCH_RSA_PUB';
export const FAIL_FETCH_RSA_PUB = 'FAIL_FETCH_RSA_PUB';

/**
 * Remove Node
 */
const requestFetchRsaPub = () => ({
  type: REQUEST_FETCH_RSA_PUB
});

const successFetchRsaPub = data => ({
  type: SUCCESS_FETCH_RSA_PUB,
  key: data,
  receivedAt: Date.now()
});

const failFetchRsaPub = (error) => ({
  type: FAIL_FETCH_RSA_PUB,
  error: error
});

export const fetchRsaPub = () => dispatch => {
  dispatch(requestFetchRsaPub());

  return api.get(`sshkey`)
    .then(response => {
      const {status, data} = response;

      if (status !== 200) {
        dispatch(failFetchRsaPub(data));
        return;
      }

      dispatch(successFetchRsaPub(data));
    })
    .catch(error => {
      const {data} = error.response;
      dispatch(failFetchRsaPub(data));
    });
};
