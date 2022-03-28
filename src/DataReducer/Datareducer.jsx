const initialState = {
  notes: [],
};

const DataReducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "ENTERNOTE": {
      return {
        ...state,
        notes: [...payload.note],
      };
    }
    default:
      return state;
  }
};

export { DataReducer, initialState };
