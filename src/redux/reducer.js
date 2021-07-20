const initialState = {
  album: {},
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_ALBUM":
      return {
        ...state,
        images: payload.results,
        found: payload.total,
      };
    case "UPDATE_ALBUM":
      const prev = [...state.images];
      return {
        ...state,
        images: [...prev, ...payload.results],
      };
    default:
      return state;
  }
};

export default reducer;
