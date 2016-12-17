const initial = {
  key: ''
};

export default (state = initial, action) => {
  switch (action.type) {
    case 'REQUEST_FETCH_RSA_PUB':
      state = Object.assign({}, state, {
        sshkey: ''
      });
      break;
    case 'SUCCESS_FETCH_RSA_PUB':
      state = Object.assign({}, state, {
        key: action.key
      });
      break;
    default:
      break;
  }

  return state;
};
