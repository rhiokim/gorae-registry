import registry from '../api/api';

export const REQUEST_FETCH_CATALOG = 'REQUEST_FETCH_CATALOG';
export const SUCCESS_FETCH_CATALOG = 'SUCCESS_FETCH_CATALOG';
export const FAIL_FETCH_CATALOG = 'FAIL_FETCH_CATALOG';

/**
 * Remove Node
 */
const requestFetchCatalog = () => ({
  type: REQUEST_FETCH_CATALOG
});

const successFetchCatalog = data => ({
  type: SUCCESS_FETCH_CATALOG,
  repositories: data.repositories,
  receivedAt: Date.now()
});

const failFetchCatalog = (error) => ({
  type: FAIL_FETCH_CATALOG,
  error: error
});

export const fetchCatalog = () => dispatch => {
  dispatch(requestFetchCatalog());

  return registry.get(`_catalog`)
    .then(response => {
      const {status, data} = response;

      if (status !== 200) {
        dispatch(failFetchCatalog(data));
        return;
      }

      dispatch(successFetchCatalog(data));
    })
    .catch(error => {
      const {data} = error.response;
      dispatch(failFetchCatalog(data));
    });
};
