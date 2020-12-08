export const reducerUtils = {
  initial: (initialData = null) => ({
    loading: false,
    data: initialData,
    error: null
  }),
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null
  }),
  success: payload => ({
    loading: false,
    data: payload,
    error: null
  }),
  error: error => ({
    loading: false,
    data: null,
    error: error
  })
};
