const initial = {
  repositories: []
};

export default (state = initial, action) => {
  switch (action.type) {
    case 'REQUEST_FETCH_CATALOG':
      state = Object.assign({}, state, {
        repositories: []
      });
      break;
    case 'SUCCESS_FETCH_CATALOG':
      state = Object.assign({}, state, {
        repositories: action.repositories
      });
      break;
    default:
      break;
  }

  return state;
};
