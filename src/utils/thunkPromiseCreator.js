const createPromiseThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_success`, `${type}_error`];

  return param => async dispatch => {
    dispatch({ type });
      try {
        const payload = await promiseCreator(param);
        dispatch({ type: SUCCESS, payload });
      } catch (err) {
        dispatch({ type: ERROR, payload: err, error: true });
      }
  };
};

export default createPromiseThunk;
